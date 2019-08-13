import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { Mutation } from "@apollo/react-components";
import gql from "graphql-tag";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { QuestionaireLayout } from "../_components/QuestionaireLayout";
import { RenderStdTextField } from "../_components/RenderStdTextField";
import ErrorDisplay from "../_components/ErrorMessage";
import { StandardPage, QuestionContainer, Legal } from "../_components";

import { CURRENT_USER_QUERY } from "../_components/User";

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      firstName
    }
  }
`;

const validate = values => {
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
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const Signin = props => {
  const { history, to } = props;

  return (
    <Mutation
      mutation={SIGNIN_MUTATION}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      onCompleted={() => {
        history.push({ to });
      }}
      onError={error => {
        console.log(error);
      }}
    >
      {(login, { error, loading }) => (
        <Form
          initialValues={{ email: "", password: "" }}
          validate={validate}
          onSubmit={async (values, form) => {
            await login({ variables: { ...values } });
          }}
        >
          {({ handleSubmit, values, errors, ...rest }) => (
            <QuestionaireLayout values={values} page={0}>
              <StandardPage
                directiopn="up"
                handleSubmit={handleSubmit}
                buttonText="Sign In"
                buttonVariant="outlined"
                errors={errors}
                values={values}
                {...rest}
              >
                <Typography align="center" gutterBottom variant="h4">
                  Sign In
                </Typography>
                <ErrorDisplay error={error} />
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Field
                      component={RenderStdTextField}
                      autoFocus={true}
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
                <Legal textLocation="Sign In" />
              </StandardPage>
              <pre>{JSON.stringify(errors, 0, 2)}</pre>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </QuestionaireLayout>
          )}
        </Form>
      )}
    </Mutation>
  );
};

const connectedSignin = withRouter(Signin);
export { connectedSignin as Signin };
