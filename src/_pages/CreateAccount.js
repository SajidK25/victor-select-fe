import React, { useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Form, Field } from 'react-final-form'
import { ApolloConsumer } from 'react-apollo'
import gql from 'graphql-tag'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import {
  RenderTextField,
  QuestionContainer,
  QHeader,
  Legal
} from '../_components'
import { StandardHeading } from '../_components/StandardHeading'
import { CURRENT_USER_QUERY } from '../_components/User'

const useStyles = makeStyles(theme => ({
  formRow: {
    display: 'flex',
    margin: '0'
  },
  appContainer: {
    paddingTop: 70,
    overflowY: 'auto'
  },
  formContainer: {
    width: '100%',
    marginTop: 60
  },
  button: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(1),
    width: '60%',
    fontSize: 18,
    padding: 8
  }
}))

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $firstName: String!
    $lastName: String!
    $password: String!
  ) {
    signup(
      email: $email
      firstName: $firstName
      lastName: $lastName
      password: $password
    ) {
      id
      email
      firstName
      lastName
    }
  }
`

const USER_EXISTS_QUERY = gql`
  query USER_EXISTS_QUERY($email: String!) {
    userExists(email: $email) {
      message
    }
  }
`

const additionalText =
  'The information you provide will be used by your doctor to evaluate your symptoms, history and lifestyle. Then, if appropriate, your doctor will prescribe medication for treatment. '

let CreateAccount = props => {
  const { product, heading } = props
  const classes = useStyles()
  console.log(classes)
  const [lastEmail, setLastEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [checkingEmail, setCheckingEmail] = useState(false)

  return (
    <ApolloConsumer>
      {client => (
        <Form
          initialValues={{ password: '' }}
          validateOnBlur={true}
          validate={async values => {
            const errors = {}
            if (!values.firstName) {
              errors.firstName = 'First Name is required'
            }
            if (!values.lastName) {
              errors.lastName = 'Last Name is required'
            }
            if (!values.password) {
              errors.password = 'Password is required'
            } else if (
              !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/gm.test(
                values.password
              )
            ) {
              errors.password =
                'Password must include at least 8 chars., contain at least 1 uppercase letter, 1 lowercase letter and 1 number'
            }

            if (!values.email) {
              errors.email = 'email address is required'
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address'
            }

            if (!errors.email) {
              if (lastEmail !== values.email) {
                console.log('About to run query')
                // Run the query
                // this.setState({ checkingEmail: true })
                const { data } = await client.query({
                  query: USER_EXISTS_QUERY,
                  variables: { email: values.email },
                  fetchPolicy: 'network-only'
                })
                //             this.setState({ checkingEmail: false })
                if (data.userExists.message) {
                  errors.email = 'This email is in use.'
                  setEmailError(errors.email)
                } else {
                  setEmailError('')
                }
                setLastEmail(values.email)
              } else if (emailError !== '') {
                errors.email = emailError
              }
            }
            return errors
          }}
          onSubmit={async values => {
            client
              .mutate({
                mutation: SIGNUP_MUTATION,
                variables: { ...values },
                refetchQueries: [
                  {
                    query: CURRENT_USER_QUERY,
                    variables: {
                      awaitRefetchQueries: true
                    }
                  }
                ]
              })
              .then(() => this.props.history.push(`/visit/${product}`))
            console.log('Saving!:', values)
          }}
        >
          {({
            handleSubmit,
            submitting,
            validating,
            values,
            invalid,
            pristine,
            errors
          }) => (
            <>
              <QHeader page={0} />
              <div className={classes.appContainer}>
                <QuestionContainer direction="left">
                  <div className={classes.fromContainer}>
                    <StandardHeading
                      questionText={`Getting started towards${heading}is just a few clicks away...`}
                      additionalText={additionalText}
                      alignTitles="left"
                    />
                    <form onSubmit={handleSubmit}>
                      <Box display="flex">
                        <Field
                          name="firstName"
                          autoFocus={true}
                          component={RenderTextField}
                          placeholder="First name"
                          type="input"
                        />
                        <Field
                          name="lastName"
                          component={RenderTextField}
                          placeholder="Last name"
                          type="input"
                        />
                      </Box>
                      <Field
                        name="email"
                        validating={validating}
                        component={RenderTextField}
                        placeholder="Email"
                        type="email"
                      />
                      <Field
                        name="password"
                        component={RenderTextField}
                        placeholder="Password"
                        type="password"
                      />
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        align="center"
                        disabled={submitting || validating}
                        className={classes.button}
                      >
                        Continue
                      </Button>
                      <Legal textLocation="Continue" />
                    </form>
                  </div>
                </QuestionContainer>
              </div>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </>
          )}
        </Form>
      )}
    </ApolloConsumer>
  )
}

CreateAccount = withRouter(CreateAccount)

export { CreateAccount }
