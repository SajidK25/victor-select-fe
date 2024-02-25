import React, { useState } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { Form, Field } from "react-final-form";
import Grid from "@material-ui/core/Grid";
import {
  StandardPage,
  QuestionaireLayout,
  RenderStdTextField,
  RenderSimpleCheckbox,
  RenderCheckError,
  Legal,
  ErrorMessage,
} from "../../../_components";
import { setCurrentProducts } from "../ProductInfo";
import { getQuestionaire } from "../../questionPaths";
import { logReactGAEvent } from "../../../analytics";
import { REGISTER_MUTATION, ME_QUERY } from "../../../Graphql";
import { setAccessToken } from "../../../accessToken";
import { VisitStartLoginPage } from "./VisitStartLoginPage";
import { Checkbox } from "@material-ui/core";

const initialData = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  accept: false,
};

const validateCreateAccount = (values) => {
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
  const location = useLocation();

  const [isAccount, setIsAccount] = useState(false);

  const questionaire = getQuestionaire(id);
  const pathBase = questionaire.pathBase;
  setCurrentProducts(questionaire.type);
  logReactGAEvent({
    category: `${questionaire.type} visit`,
    action: `Looking at registration`,
  });

  const [register, { error: mutationError }] = useMutation(REGISTER_MUTATION);

  const handleChange = (event) => {
    console.log(event.target);
    setIsAccount(!isAccount);
  };
  return isAccount ? (
    <VisitStartLoginPage
      handleChange={handleChange}
      isAccount={isAccount}
      setIsAccount={setIsAccount}
      pathBase={pathBase}
      questionaire={questionaire}
      logReactGAEvent={logReactGAEvent}
      history={history}
    />
  ) : (
    <Form
      initialValues={initialData}
      validate={validateCreateAccount}
      onSubmit={async (values) => {
        const input = { ...values };
        delete input.accept;
        try {
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
                    me: data.register.user,
                  },
                });
              }
            },
          });
          if (response && response.data) {
            logReactGAEvent({
              category: `${questionaire.type} visit`,
              action: `Started Visit`,
            });
            //     if (response.data.register.message !== "EXISTS") {
            setAccessToken(response.data.register.accessToken);
            history.push(pathBase);
            //      } else {
            //        history.push("./login", { from: location });
          }
        } catch (err) {
          console.log(err);
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
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  component={RenderStdTextField}
                  id="lname"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  autoComplete="family-name"
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
                  autoComplete="username"
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <Checkbox
                checked={isAccount}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <span style={{ fontWeight: "bold" }}>
                I have an already account!
              </span>
            </div>
          </div>
        </QuestionaireLayout>
      )}
    </Form>
  );
};
