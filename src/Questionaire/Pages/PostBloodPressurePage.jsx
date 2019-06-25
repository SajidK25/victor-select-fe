import React from "react";
import { Field } from "react-final-form";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import {
  StandardPage,
  RenderSimpleCheckbox,
  RenderCheckError
} from "../../_components";

const validatePostBP = values => {
  const errors = {};

  if (!values.bloodPressure.confirmBP) {
    errors.checkError = "You must confirm to continue.";
  }

  return errors;
};

const styles = {
  group: {
    marginTop: 15,
    marginBottom: 15
  }
};

let PostBPPage = props => {
  const { values, ...rest } = props;
  const bloodPressure = `${values.bloodPressure.systolic || ""}/${values
    .bloodPressure.diastolic || ""} mmHg`;
  return (
    <StandardPage values={values} {...rest}>
      <Typography variant="body1" align="left" gutterBottom>
        Please confirm that this is your correct blood pressure reading and it
        was done within the last 6 months.
      </Typography>
      <Typography variant="headline" align="center" gutterBottom>
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
    </StandardPage>
  );
};

PostBPPage = withStyles(styles)(PostBPPage);

export { PostBPPage, validatePostBP };
