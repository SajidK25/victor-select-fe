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
  RenderSimpleCheckbox,
  RenderCheckError,
  Legal,
  ErrorMessage
} from "../../../_components";
import { getQuestionaire } from "../../questionPaths";
import { REGISTER_MUTATION, ME_QUERY } from "../../../Graphql";
import { setAccessToken } from "../../../accessToken";

const initialData = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  accept: false
};

const validateCreateAccount = values => {
  const errors = {};
  if (!values.accept) {
    errors.checkError = "You must indicate that you accept and consent.";
  }
  if (!values.firstName) {
    errors.firstName = "First Name is required";
  }
  if (!values.lastName) {
    errors.lastName = "Last Name is required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (
    !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/gm.test(
      values.password
    )
  ) {
    errors.password = `Password must include at least 8 chars., 
                   contain at least 1 uppercase letter, 1 lowercase letter and 1 number`;
  }

  if (!values.email) {
    errors.email = "email address is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const additionalText = `The information you provide will be used by your doctor to 
   evaluate your symptoms, history and lifestyle. Then, if appropriate,
   your doctor will prescribe the medication for treatment.`;

export const CreateAccountPage = () => {
  const history = useHistory();
  const { id } = useParams();

  const questionaire = getQuestionaire(id);
  const pathBase = questionaire.pathBase;

  const [
    register,
    { loading: mutationLoading, error: mutationError }
  ] = useMutation(REGISTER_MUTATION);

  return (
    <Form
      initialValues={initialData}
      validate={validateCreateAccount}
      onSubmit={async values => {
        const input = { ...values };
        delete input.accept;
        console.log("Input: ", input);
        const response = await register({
          variables: { input },
          update: (store, { data }) => {
            if (!data) {
              return null;
            }

            if (data.register.message !== "EXISTS") {
              store.writeQuery({
                query: ME_QUERY,
                data: {
                  me: data.register.user
                }
              });
            }
          }
        });
        if (response && response.data) {
          if (response.data.register.message !== "EXISTS") {
            setAccessToken(response.data.register.accessToken);
            history.push(pathBase);
          } else {
            history.push(`/Login/${id}`);
          }
        }
      }}
    >
      {({ handleSubmit, values, ...rest }) => (
        <QuestionaireLayout values={values} page={0}>
          <StandardPage
            questionText={`Getting started towards${questionaire.heading}is just a few clicks away...`}
            additionalText={additionalText}
            buttonText="Create Account"
            buttonVariant="outlined"
            handleSubmit={handleSubmit}
            values={values}
            {...rest}
          >
            <ErrorMessage error={mutationError} />
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Field
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
            <Grid item xs={12}>
              <Field
                name="accept"
                component={RenderSimpleCheckbox}
                label={<Legal />}
              />
              <Field name="checkError" component={RenderCheckError} />
            </Grid>
          </StandardPage>
        </QuestionaireLayout>
      )}
    </Form>
  );
};
