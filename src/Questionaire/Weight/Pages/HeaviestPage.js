import React from "react";
import { Field } from "react-final-form";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { StandardPage, RenderStdTextField } from "../../../_components";

const useStyles = makeStyles({
  wrapper: {
    width: 270,
    margin: "0 auto",
    backgroundColor: "#ffffff",
  },
  paper: {
    padding: 16,
  },
  label: {
    width: 114,
    textAlign: "right",
    marginRight: 8,
  },
  weightWrapper: {
    display: "flex",
    alignItems: "center",
    marginBottom: 8,
  },
});

const validateHeaviest = (values) => {
  const errors = { measurement: {} };

  if (
    values.measurement.heaviestWeight < 95 ||
    values.measurement.heaviestWeight > 999
  ) {
    errors.measurement.heaviestWeight = " ";
  }
  if (
    values.measurement.heaviestWeightAge < 12 ||
    values.measurement.heaviestWeightAge > 112
  ) {
    errors.measurement.heaviestWeightAge = " ";
  }

  return errors;
};

const questionText =
  "What has been your heaviest weight and when where you at that weight?";
const additionalText = "Enter the weight and age.";

const HeaviestPage = (props) => {
  const classes = useStyles();

  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    >
      <Paper className={classes.paper}>
        <div className={classes.wrapper}>
          <div className={classes.weightWrapper}>
            <div className={classes.label}>Weight:</div>
            <div className={classes.weight}>
              <Field
                component={RenderStdTextField}
                required
                id="heaviestWeight"
                name="measurement.heaviestWeight"
                type="number"
                min="90"
                max="999"
                autoComplete=""
                inputProps={{
                  style: { width: 65, textAlign: "right" },
                }}
              />
            </div>
          </div>
          <div className={classes.weightWrapper}>
            <div className={classes.label}>Age:</div>
            <div className={classes.weight}>
              <Field
                component={RenderStdTextField}
                required
                id="heaviestWeightAge"
                name="measurement.heaviestWeightAge"
                type="number"
                autoComplete=""
                inputProps={{
                  style: { width: 65, textAlign: "right" },
                }}
              />
            </div>
          </div>
        </div>
      </Paper>
    </StandardPage>
  );
};

export { HeaviestPage, validateHeaviest };
