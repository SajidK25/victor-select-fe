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

const validateLowest = (values) => {
  const errors = { measurement: {} };

  if (
    values.measurement.lowestWeight < 70 ||
    values.measurement.lowestWeight > 999
  ) {
    errors.measurement.lowestWeight = " ";
  }
  if (
    values.measurement.lowestWeightAge < 12 ||
    values.measurement.lowestWeightAge > 112
  ) {
    errors.measurement.lowestWeightAge = " ";
  }

  return errors;
};

const questionText =
  "What has been your lowest weight and when where you at that weight?";
const additionalText = "Enter the weight and age.";

const LowestPage = (props) => {
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
                id="lowestWeight"
                name="measurement.lowestWeight"
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
                id="lowestWeightAge"
                name="measurement.lowestWeightAge"
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

export { LowestPage, validateLowest };
