import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import LockIcon from "@material-ui/icons/Lock";
import { Typography } from "@material-ui/core";
import {
  RenderTextField,
  StandardPage,
  QuestionContainer,
  Legal,
  QHeader
} from "../_components";
import { CURRENT_USER_QUERY } from "../_components/User";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  formRow: {
    display: "flex",
    margin: "0"
  },
  formField: {
    flex: 1,
    margin: 4
  },
  emailField: {
    flex: 1,
    margin: 4,
    paddingRight: 8,
    width: "100%"
  },
  button: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(1),
    width: "60%",
    fontSize: 18,
    padding: 8
  },
  icon: {
    marginLeft: theme.spacing(1),
    fontSize: 20,
    marginRight: theme.spacing(1)
  },
  centerField: {
    display: "block",
    textAlign: "center"
  }
});

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      firstName
    }
  }
`;

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: {},
      transdir: "bottom"
    };
  }

  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <ApolloConsumer>
        {client => (
          <Form
            initialValues={this.state.initialValue}
            validate={values => {
              const errors = {};
              if (!values.password) {
                errors.password = "Password is required";
              } else if (
                !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/gm.test(
                  values.password
                )
              ) {
                errors.password =
                  "Password must include at least 8 chars., contain at least 1 uppercase letter, 1 lowercase letter and 1 number";
              }

              if (!values.email) {
                errors.email = "email address is required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={async values => {
              client
                .mutate({
                  mutation: SIGNIN_MUTATION,
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
                .then(() => this.props.history.push(this.props.to));
              console.log("Saving!:", values);
            }}
          >
            {({ handleSubmit, submitting, values, invalid, errors }) => (
              <>
                <QHeader handlePrevious={this.previous} page={0} />
                <QuestionContainer direction={this.state.transdir}>
                  <form onSubmit={handleSubmit}>
                    <StandardPage>
                      <Typography align="center" gutterBottom variant="h4">
                        Sign In
                      </Typography>
                      <Field
                        name="email"
                        className={classes.emailField}
                        inputProps={{
                          style: {
                            width: "100%",
                            fontSize: 20,
                            textAlign: "left"
                          }
                        }}
                        component={RenderTextField}
                        placeholder="email"
                        type="email"
                      />
                      <Field
                        name="password"
                        className={classes.emailField}
                        inputProps={{
                          style: {
                            width: "100%",
                            fontSize: 20,
                            textAlign: "left"
                          }
                        }}
                        component={RenderTextField}
                        placeholder="password"
                        type="password"
                      />
                    </StandardPage>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      disabled={submitting}
                    >
                      <LockIcon className={classes.icon} />
                      Sign In
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      align="center"
                      className={classes.button}
                      component={Link}
                      to="/signup"
                    >
                      Create Account
                    </Button>
                    <Legal textLocation="Sign In" />
                    <pre>{JSON.stringify(errors, 0, 2)}</pre>
                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                  </form>
                </QuestionContainer>
              </>
            )}
          </Form>
        )}
      </ApolloConsumer>
    );
  }
}

Signin = withStyles(styles)(withRouter(Signin));
export default Signin;
