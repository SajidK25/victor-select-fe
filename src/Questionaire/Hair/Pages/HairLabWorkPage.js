import React from "react";
import { Field } from "react-final-form";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { StandardPage, RadioGroup, RadioSubmit } from "../../../_components";

const options = [{ id: "yes", label: "Yes" }, { id: "no", label: "No" }];

const validateHairLabWork = values => {
  const errors = { labWork: {} };

  if (!values.labWork.answer) {
    errors.labWork.answer = "Please select an option.";
  }

  return errors;
};

const qText =
  "Have you had any lab work done such as <b>thyroid, hormone, B12, or zinc</b> to diagnose the hair loss?";

let HairLabWorkPage = props => {
  const { handleSubmit, ...rest } = props;

  const name = "labWork.answer";

  return (
    <StandardPage handleSubmit={handleSubmit} {...rest}>
      <Box mb={1}>
        <Typography variant="h6">
          Have you had any lab work done such as{" "}
          <u>thyroid, hormone, B12, or zinc</u> to diagnose the hair loss?
        </Typography>
      </Box>
      <Field component={RadioGroup} name={name} options={options} type="div" />
      <RadioSubmit name={name} handleSubmit={handleSubmit} options={options} />
    </StandardPage>
  );
};

export { HairLabWorkPage, validateHairLabWork };
