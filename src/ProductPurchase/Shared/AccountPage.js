import React from "react";
import { Field } from "react-final-form";
import Grid from "@material-ui/core/Grid";
import { Legal } from "../components/Legal";
import { makeStyles } from "@material-ui/core/styles";
import { RenderStdTextField, SubmitButton } from "../components";
import { RenderSimpleCheckbox, RenderCheckError } from "../../_components";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiTextField-root": {
      backgroundColor: "white",
    },
    "& .MuiFormHelperText-marginDense": {
      marginTop: 0,
    },
  },
  title: {
    margin: "20px 0 24px",
    fontWeight: 500,
    fontSize: 26,
  },
}));

export const validateAccount = async (values) => {
  const errors = { personal: {} };
  if (!values.accept) {
    errors.checkError = "You must indicate that you accept.";
  }
  if (!values.personal.firstName) {
    errors.personal.firstName = "First Name is required";
  }
  if (!values.personal.lastName) {
    errors.personal.lastName = "Last Name is required";
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

export const AccountPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>Your Account</div>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Field
            component={RenderStdTextField}
            id="fname"
            name="personal.firstName"
            label="First Name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={RenderStdTextField}
            id="lname"
            name="personal.lastName"
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
          type="checkbox"
          name="accept"
          component={RenderSimpleCheckbox}
          label={<Legal />}
        />
        <Field name="checkError" component={RenderCheckError} />
      </Grid>
      <SubmitButton />
    </div>
  );
};
