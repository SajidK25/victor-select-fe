import React from "react";
import { withRouter } from "react-router-dom";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";
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
import { CURRENT_USER_QUERY } from "../../../_components/User";

const USER_EXISTS_QUERY = gql`
  query USER_EXISTS_QUERY($email: String!) {
    userExists(email: $email)
  }
`;

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $firstName: String!
    $lastName: String!
    $password: String!
  ) {
    register(
      email: $email
      firstName: $firstName
      lastName: $lastName
      password: $password
    )
  }
`;

const initialData = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  accept: false
};

const additionalText = `The information you provide will be used by your doctor to 
   evaluate your symptoms, history and lifestyle. Then, if appropriate,
   your doctor will prescribe the medication for treatment.`;

const CreateAccountPage = props => {
  const { questionaire, history, match } = props;
  const pathBase = questionaire.pathBase;
  const client = useApolloClient();

  console.log("CC:", match);
  client.writeData({ data: { sleepType: match.params.id } });
  const [
    register,
    { loading: mutationLoading, error: mutationError }
  ] = useMutation(SIGNUP_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
    awaitRefetchQueries: true,
    onCompleted: () => {
      history.push(pathBase);
    }
  });

  const verifyEmail = async (value, client) => {
    //   const { data } = await client.query({
    //     query: USER_EXISTS_QUERY,
    //     variables: { email: value }
    //   });
    //   if (data.userExists) {
    //     return "This email is in use.";
    //   }
  };

  const validateCreateAccount = async (values, client) => {
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

    if (Object.keys(errors).length) {
      return errors;
    }

    const res = await verifyEmail(values.email, client);
    if (res) {
      console.log(res);
      errors.email = res;
    }
    return errors;
  };

  return (
    <Form
      initialValues={initialData}
      validate={async values => validateCreateAccount(values, client)}
      onSubmit={values => {
        console.log("Signup:", values);
        register({ variables: { ...values } });
      }}
    >
      {({ handleSubmit, values, errors, ...rest }) => (
        <QuestionaireLayout values={values} page={0}>
          {mutationLoading && <Spinner />}
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

const connectedCreateAccountPage = withRouter(CreateAccountPage);
export { connectedCreateAccountPage as CreateAccountPage };
