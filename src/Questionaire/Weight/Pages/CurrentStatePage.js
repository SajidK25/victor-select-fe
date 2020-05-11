import React from "react";
import { Field } from "react-final-form";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {
  StandardPage,
  RenderStdSelect,
  RenderStdTextField,
} from "../../../_components";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: 270,
    margin: "0 auto",
    backgroundColor: "#ffffff",
  },
  paper: {
    padding: 16,
  },
  heightWrapper: {
    display: "flex",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    width: 114,
    textAlign: "right",
    marginRight: 8,
  },
  height: {
    marginLeft: 12,
    textAlign: "right",
  },
  weightWrapper: {
    display: "flex",
    alignItems: "center",
    marginBottom: 8,
  },
}));

const feetOptions = [
  { value: 4, label: "4'" },
  { value: 5, label: "5'" },
  { value: 6, label: "6'" },
];

const inchesOptions = [
  { value: 0, label: '0"' },
  { value: 1, label: '1"' },
  { value: 2, label: '2"' },
  { value: 3, label: '3"' },
  { value: 4, label: '4"' },
  { value: 5, label: '5"' },
  { value: 6, label: '6"' },
  { value: 7, label: '7"' },
  { value: 8, label: '8"' },
  { value: 9, label: '9"' },
  { value: 10, label: '10"' },
  { value: 11, label: '11"' },
];

const validateCurrentState = (values) => {
  const errors = { measurement: {} };
  if (!values.measurement.feet) {
    errors.measurement.feet = " ";
  }
  if (!values.measurement.inches) {
    errors.measurement.inches = " ";
  }

  if (
    values.measurement.currentWeight < 95 ||
    values.measurement.currentWeight > 999
  ) {
    errors.measurement.currentWeight = " ";
  }
  if (
    values.measurement.goalWeight < 95 ||
    values.measurement.goalWeight > 999
  ) {
    errors.measurement.goalWeight = " ";
  }

  return errors;
};

const questionText = "Tell us about yourself.";
const additionalText = "";

const CurrentStatePage = (props) => {
  const { values } = props;
  const classes = useStyles();

  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    >
      <Paper className={classes.paper}>
        <div className={classes.wrapper}>
          <div className={classes.heightWrapper}>
            <div className={classes.label}>Height:</div>
            <Field
              component={RenderStdSelect}
              id="inches"
              name="measurement.feet"
              native={true}
              options={feetOptions}
              inputProps={{
                style: {
                  textAlign: "right",
                  width: 50,
                },
              }}
              type="number"
              label="Height:"
            />

            <div className={classes.height}>
              <Field
                component={RenderStdSelect}
                id="inches"
                native={true}
                name="measurement.inches"
                options={inchesOptions}
                inputProps={{
                  style: { textAlign: "right", width: 50 },
                }}
                type="number"
                label=""
              />
            </div>
          </div>
          <div className={classes.weightWrapper}>
            <div className={classes.label}>Current Weight:</div>
            <div className={classes.weight}>
              <Field
                component={RenderStdTextField}
                required
                id="weight"
                name="measurement.currentWeight"
                type="number"
                min="90"
                max="999"
                autoComplete=""
                inputProps={{
                  style: { width: 98, textAlign: "right" },
                }}
              />
            </div>
          </div>
          <div className={classes.weightWrapper}>
            <div className={classes.label}>Goal Weight:</div>
            <div className={classes.weight}>
              <Field
                component={RenderStdTextField}
                required
                id="goalWeight"
                name="measurement.goalWeight"
                type="number"
                autoComplete=""
                inputProps={{
                  style: { width: 98, textAlign: "right" },
                }}
              />
            </div>
          </div>
        </div>
      </Paper>
    </StandardPage>
  );
};

export { CurrentStatePage, validateCurrentState };
