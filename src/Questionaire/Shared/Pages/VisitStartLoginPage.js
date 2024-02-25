import React from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";
import { Field } from "react-final-form";

import { LOGIN_MUTATION, ME_QUERY } from "../../../Graphql";
import { setAccessToken } from "../../../accessToken";
import {
  ErrorMessage,
  RenderStdTextField,
  UpdatePage,
} from "../../../_components";
import { Checkbox } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heading: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    fontSize: 20,
    fontWeight: 500,
  },
  fieldContainer: {
    marginTop: theme.spacing(1),
  },
  buttonLink: {
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
  forgotButton: {
    textDecoration: "none",
  },
}));

export const VisitStartLoginPage = ({
  handleChange,
  isAccount,
  pathBase,
  questionaire,
  logReactGAEvent,
  history,
}) => {
  //   const { from } = location.state || { from: { pathname: "/" } };
  const classes = useStyles();

  const initialValues = {
    email: "",
    password: "",
  };

  const [login, { error: mutationError }] = useMutation(LOGIN_MUTATION);

  const validate = (values) => {
    const errors = {};
    if (!values.password) {
      errors.password = "Password is required";
    }

    if (!values.email) {
      errors.email = "email address is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const Submit = async (values) => {
    try {
      const response = await login({
        variables: { ...values },
        update: (store, { data }) => {
          if (!data) {
            return null;
          }
          store.writeQuery({
            query: ME_QUERY,
            data: {
              me: data.login.user,
            },
          });
        },
      });
      if (response && response.data) {
        logReactGAEvent({
          category: `${questionaire.type} visit`,
          action: `Started Visit`,
        });
        setAccessToken(response.data.login.accessToken);
        history.push(pathBase);
      }
    } catch (err) {
      console.log("Error", err);
    }
  };

  return (
    <>
      <UpdatePage
        headerText="Login"
        initialValues={initialValues}
        validate={validate}
        onSubmit={Submit}
        buttonText="Login"
        maxWidth={400}
      >
        <div className={classes.heading}>Member Login</div>
        <ErrorMessage error={mutationError} />
        <div className={classes.fieldContainer}>
          <Field
            component={RenderStdTextField}
            id="email"
            type="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
          />
        </div>
        <div className={classes.fieldContainer}>
          <Field
            component={RenderStdTextField}
            id="password"
            type="password"
            name="password"
            label="Password"
            autoComplete="password"
            fullWidth
          />
        </div>
        <div className={classes.buttonLink}>
          <Link to="request-reset" className={classes.forgotButton}>
            Forgot Password?
          </Link>
        </div>
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
      </UpdatePage>
    </>
  );
};
