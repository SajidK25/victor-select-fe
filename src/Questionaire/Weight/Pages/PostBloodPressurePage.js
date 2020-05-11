import React from "react";
import { Field } from "react-final-form";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {
  InfoPage,
  RenderSimpleCheckbox,
  RenderCheckError
} from "../../../_components";

const validatePostBP = values => {
  const errors = {};

  if (!values.bloodPressure.confirmBP) {
    errors.checkError = "You must confirm to continue.";
  }

  return errors;
};

const useStyles = makeStyles(theme => ({
  group: {
    padding: theme.spacing(2)
  },
  heading: {
    fontSize: 16,
    fontWeight: 400,
    marginBottom: theme.spacing(2)
  }
}));

const PostBPPage = props => {
  const { values } = props;
  const classes = useStyles();

  const bloodPressure = `${values.bloodPressure.systolic || ""}/${values
    .bloodPressure.diastolic || ""} mmHg`;
  return (
    <InfoPage {...props}>
      <Typography variant="body2" align="center" className={classes.heading}>
        Please confirm that this is your correct blood pressure reading and it
        was done within the last 6 months.
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        {bloodPressure}
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        <Field
          name="bloodPressure.confirmBP"
          component={RenderSimpleCheckbox}
          label="This is correct"
        />
        <Field name="checkError" component={RenderCheckError} />
      </Typography>
    </InfoPage>
  );
};

export { PostBPPage, validatePostBP };
