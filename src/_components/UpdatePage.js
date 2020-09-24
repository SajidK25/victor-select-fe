import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { UpdateLayout, UpdateForm } from "./";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(3),
  },
}));

export const UpdatePage = (props) => {
  const {
    headerText,
    children,
    initialValues,
    onSubmit,
    validate,
    disableButton = false,
    buttonText = "Save",
    maxWidth,
  } = props;
  const classes = useStyles();

  return (
    <UpdateLayout headerText={headerText} maxWidth={maxWidth}>
      <Paper className={classes.formContainer}>
        <UpdateForm
          initialValues={initialValues}
          onSubmit={onSubmit}
          validate={validate}
          disableButton={disableButton}
          buttonText={buttonText}
        >
          {children}
        </UpdateForm>
      </Paper>
    </UpdateLayout>
  );
};
