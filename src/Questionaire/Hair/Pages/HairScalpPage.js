import React from "react";
import { CheckboxPage } from "../../../_components";
import { optionsAllFalse } from "../../../_helpers";

const options = [
  { name: "scalp.itch", label: "Itching" },
  { name: "scalp.burn", label: "Burning" },
  { name: "scalp.hurt", label: "Pain" },
  { name: "scalp.rash", label: "Rash" },
  { name: "scalp.flaking", label: "Flaking" }
];

const validateHairScalp = values => {
  const errors = { scalp: {} };

  if (optionsAllFalse(options, values) && !values.scalp.none) {
    errors.checkError = "Please select an option";
  }

  return errors;
};

const questionText =
  "Does your scalp ever experience the following conditions?";
const additionalText = "Select all that apply to you.";

const noOptionField = "scalp.none";
const noOptionText = "None of these apply";

const HairScalpPage = props => {
  return (
    <CheckboxPage
      options={options}
      noOptionField={noOptionField}
      noOptionText={noOptionText}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { HairScalpPage, validateHairScalp };
