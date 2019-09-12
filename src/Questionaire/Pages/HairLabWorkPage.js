import React from "react";
import { RadioPage } from "../../_components";

const options = [{ id: "yes", label: "Yes" }, { id: "no", label: "No" }];

const validateHairLabWork = values => {
  const errors = { labWork: {} };

  if (!values.labWork.answer) {
    errors.labWork.answer = "Please select an option.";
  }

  return errors;
};

const qText = "Have you had any lab work done to diagnose the hair loss?";

let HairLabWorkPage = props => {
  return (
    <RadioPage
      name="labWork.answer"
      options={options}
      questionText={qText}
      {...props}
    />
  );
};

export { HairLabWorkPage, validateHairLabWork };
