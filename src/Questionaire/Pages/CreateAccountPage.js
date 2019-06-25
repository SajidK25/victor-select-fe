import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { Form, Field } from "react-final-form";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { StandardPage } from "../../_components/StandardPage";
import { RenderStdTextField } from "../../_components/RenderStdTextField";
import {
  RenderTextField,
  QuestionContainer,
  QHeader,
  Legal
} from "../../_components";
import { StandardHeading } from "../../_components/StandardHeading";

const useStyles = makeStyles(theme => ({
  formRow: {
    display: "flex",
    margin: "0"
  },
  appContainer: {
    paddingTop: 70,
    overflowY: "auto"
  },
  formContainer: {
    width: "100%",
    marginTop: 60
  },
  button: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(1),
    width: "60%",
    fontSize: 18,
    padding: 8
  }
}));

const validateCreateAccount = values => {
  const errors = { personal: {} };
  if (!values.personal.firstName) {
    errors.personal.firstName = "First Name is required";
  }
  if (!values.personal.lastName) {
    errors.personal.lastName = "Last Name is required";
  }
  if (!values.personal.password) {
    errors.personal.password = "Password is required";
  } else if (
    !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/gm.test(
      values.personal.password
    )
  ) {
    errors.personal.password =
      "Password must include at least 8 chars., contain at least 1 uppercase letter, 1 lowercase letter and 1 number";
  }

  if (!values.personal.email) {
    errors.personal.email = "email address is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.personal.email)
  ) {
    errors.personal.email = "Invalid email address";
  }

  return errors;
};

const additionalText =
  "The information you provide will be used by your doctor to evaluate your symptoms, history and lifestyle. Then, if appropriate, your doctor will prescribe medication for treatment. ";

const CreateAccountPage = props => {
  const { heading } = props;
  const classes = useStyles();
  console.log(classes);

  return (
    <StandardPage
      questionText={`Getting started towards${heading}is just a few clicks away...`}
      additionalText={additionalText}
      {...props}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Field
            required
            component={RenderStdTextField}
            id="lname"
            name="personal.firstName"
            label="First Name"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={RenderStdTextField}
            id="lname"
            name="personal.lastName"
            label="Last Name"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            component={RenderStdTextField}
            required
            id="city"
            type="email"
            name="personal.email"
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
            name="personal.password"
            label="Password"
            autoComplete="password"
            fullWidth
          />
        </Grid>
      </Grid>
      <Legal textLocation="Next" />
    </StandardPage>
  );
};

export { CreateAccountPage, validateCreateAccount };
