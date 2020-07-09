import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";
import { Field } from "react-final-form";
import { UpdatePage, RenderStdTextField, ErrorMessage } from "../_components";
import { RESET_MUTATION } from "../Graphql";

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
}));

export const RequestReset = () => {
  const classes = useStyles();

  const initialValues = {
    email: "",
  };

  const [requestReset, { loading, error, called }] = useMutation(
    RESET_MUTATION
  );

  const validate = (values) => {
    const errors = {};

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
      await requestReset({
        variables: { ...values },
      });
    } catch (err) {
      console.log("Error", err);
    }
  };

  return (
    <UpdatePage
      headerText="Password Reset"
      initialValues={initialValues}
      validate={validate}
      onSubmit={Submit}
      buttonText="Request Reset"
      maxWidth={375}
    >
      <div className={classes.heading}>Request Password Reset</div>
      {!error && !loading && !called && (
        <div className={classes.directions}>
          Enter your email address and we’ll send a link to reset your password.
        </div>
      )}
      {!error && !loading && called && (
        <div className={classes.done}>Check your email for a reset link!</div>
      )}
      <ErrorMessage error={error} />
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
    </UpdatePage>
  );
};
