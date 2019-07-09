import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import client from '../../withData'
import gql from 'graphql-tag'
import { Form, Field } from 'react-final-form'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { StandardPage } from '../../_components/StandardPage'
import { QuestionaireLayout } from '../../_components/QuestionaireLayout'
import { RenderStdTextField } from '../../_components/RenderStdTextField'
import { Legal } from '../../_components'
import Error from '../../_components/ErrorMessage'
import { CURRENT_USER_QUERY } from '../../_components/User'
import { auth } from '../../Auth/auth'

const USER_EXISTS_QUERY = gql`
  query USER_EXISTS_QUERY($email: String!) {
    userExists(email: $email) {
      message
    }
  }
`

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

const verifyEmail = async value => {
  if (!client) return

  const { data } = await client.query({
    query: USER_EXISTS_QUERY,
    variables: { email: value }
  })
  if (data.userExists.message) {
    return { email: 'This email is in use.' }
  }
}

const validateCreateAccount = async values => {
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
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (Object.keys(errors).length) {
    return errors
  }

  const res = await verifyEmail(values.email)
  return res
}

const initialData = {
  email: '',
  firstName: '',
  lastName: '',
  password: ''
}

const additionalText =
  'The information you provide will be used by your doctor to evaluate your symptoms, history and lifestyle. Then, if appropriate, your doctor will prescribe medication for treatment. '

const CreateAccountPage = props => {
  const { questionaire, history } = props
  const pathBase = questionaire.pathBase

  console.log('Questionaire:', questionaire)

  return (
    <Mutation
      mutation={SIGNUP_MUTATION}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      onCompleted={() => {
        console.log('Complete', pathBase)
        history.push('./visit/ed')
      }}
    >
      {(signup, { error, loading }) => (
        <Form
          initialValues={initialData}
          validate={validateCreateAccount}
          onSubmit={async values => {
            await signup({ variables: { ...values } })
          }}
        >
          {({ handleSubmit, values, errors, ...rest }) => (
            <QuestionaireLayout values={values} page={0}>
              <StandardPage
                questionText={`Getting started towards${
                  questionaire.heading
                }is just a few clicks away...`}
                additionalText={additionalText}
                buttonText="Create Account"
                buttonVariant="outlined"
                handleSubmit={handleSubmit}
                values={values}
                {...rest}
              >
                <Error error={error} />
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      required
                      component={RenderStdTextField}
                      id="fname"
                      name="firstName"
                      label="First Name"
                      fullWidth
                      autoComplete="fname"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      required
                      component={RenderStdTextField}
                      id="lname"
                      name="lastName"
                      label="Last Name"
                      fullWidth
                      autoComplete="lname"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      component={RenderStdTextField}
                      required
                      id="city"
                      type="email"
                      name="email"
                      label="email"
                      fullWidth
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      component={RenderStdTextField}
                      required
                      id="state"
                      type="password"
                      name="password"
                      label="Password"
                      autoComplete="password"
                      fullWidth
                    />
                  </Grid>
                </Grid>
                {/*<button onClick={() => auth.login()}>Login</button> */}
                <Legal textLocation="Create Account" />
              </StandardPage>
            </QuestionaireLayout>
          )}
        </Form>
      )}
    </Mutation>
  )
}

const connectedCreateAccountPage = withRouter(CreateAccountPage)
export {
  connectedCreateAccountPage as CreateAccountPage,
  validateCreateAccount
}
