import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { Form, Field } from "react-final-form";
import Grid from "@material-ui/core/Grid";
import {
  StandardPage,
  Spinner,
  QuestionaireLayout,
  RenderStdTextField,
  ErrorMessage
} from "../../../_components";
import { setAccessToken } from "../../../accessToken";
import { LOGIN_MUTATION, ME_QUERY } from "../../../Graphql";

const initialData = {
  email: "",
  password: ""
};

const validateLogin = values => {
  const errors = {};
  if (!values.password) {
    errors.password = "Password is required";
  }

  if (!values.email) {
    errors.email = "email address is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

export const LoginPage = () => {
  const history = useHistory();
  const { id } = useParams();

  const [
    login,
    { loading: mutationLoading, error: mutationError }
  ] = useMutation(LOGIN_MUTATION);

  return (
    <Form
      initialValues={initialData}
      validate={validateLogin}
      onSubmit={async values => {
        const response = await login({
          variables: { ...values },
          update: (store, { data }) => {
            if (!data) {
              return null;
            }

            store.writeQuery({
              query: ME_QUERY,
              data: {
                me: data.login.user
              }
            });
          }
        });
        console.log(response);

        if (response && response.data) {
          setAccessToken(response.data.login.accessToken);
        }

        console.log("Push to /");
        history.push(`/visit/${id}`);
      }}
    >
      {({ handleSubmit, values, ...rest }) => (
        <QuestionaireLayout values={values} page={0}>
          {mutationLoading && <Spinner />}
          <StandardPage
            questionText={`Login`}
            additionalText={"It appears that you already have an account"}
            buttonText="Continue"
            buttonVariant="outlined"
            handleSubmit={handleSubmit}
            values={values}
            {...rest}
          >
            <ErrorMessage error={mutationError} />
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Field
                  component={RenderStdTextField}
                  id="email"
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
                  id="password"
                  type="password"
                  name="password"
                  label="Password"
                  autoComplete="password"
                  fullWidth
                />
              </Grid>
            </Grid>
          </StandardPage>
        </QuestionaireLayout>
      )}
    </Form>
  );
};
