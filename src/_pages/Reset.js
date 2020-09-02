import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";
import { Field } from "react-final-form";
import { UpdatePage, RenderStdTextField, ErrorMessage } from "../_components";
import { RESETPASSWORD_MUTATION, ME_QUERY } from "../Graphql";

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

export const Reset = () => {
  const location = useLocation();
  const { resetToken } = useParams();
  const { from } = location.state || { from: { pathname: "/" } };
  const classes = useStyles();

  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const [resetPassword, { error, loading, called }] = useMutation(RESETPASSWORD_MUTATION);

  const validate = (values) => {
    const errors = {};
    if (!values.password) {
      errors.password = "Password is required";
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/gm.test(values.password)) {
      errors.password = `Password must include at least 8 chars., 
                       contain at least 1 uppercase letter, 1 lowercase letter and 1 number`;
    }

    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords must match.";
    }

    return errors;
  };

  const Submit = async (values) => {
    try {
      await resetPassword({
        variables: {
          resetToken: resetToken,
          password: values.password,
          confirmPassword: values.confirmPassword,
        },
      });
    } catch (err) {
      console.log("Error", err);
    }
  };

  return (
    <UpdatePage
      headerText="Reset Password"
      initialValues={initialValues}
      validate={validate}
      onSubmit={Submit}
      buttonText="Reset Your Password"
      maxWidth={400}
    >
      <div className={classes.heading}>Reset Password</div>
      <ErrorMessage error={error} />
      {!error && !loading && called && <div className={classes.done}>Your password has been reset.</div>}
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
      <div className={classes.fieldContainer}>
        <Field
          component={RenderStdTextField}
          id="password"
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          autoComplete="password"
          fullWidth
        />
      </div>
    </UpdatePage>
  );
};
