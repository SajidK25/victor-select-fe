import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { UpdateLayout, UpdateForm } from "./";

const useStyles = makeStyles(theme => ({
  formContainer: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(3)
  }
}));

export const UpdatePage = props => {
  const { headerText, children, initialValues, onSubmit, validate } = props;
  const classes = useStyles();

  return (
    <UpdateLayout headerText={headerText}>
      <Paper className={classes.formContainer}>
        <UpdateForm
          initialValues={initialValues}
          onSubmit={onSubmit}
          validate={validate}
          buttonText="Save"
        >
          {children}
        </UpdateForm>
      </Paper>
    </UpdateLayout>
  );
};
