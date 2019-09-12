import React from "react";
import { CheckboxPage } from "../../_components";
import { optionsAllFalse } from "../../_helpers";

const options = [
  { name: "relatives.grandfather", label: "Grandfather" },
  { name: "relatives.grandmother", label: "Grandmother" },
  { name: "relatives.father", label: "Father" },
  { name: "relatives.mother", label: "Mother" },
  { name: "relatives.brother", label: "Brother(s)" },
  { name: "relatives.sister", label: "Sister(s)" }
];

const validateHairRelatives = values => {
  const errors = { relatives: {} };

  if (optionsAllFalse(options, values) && !values.relatives.none) {
    errors.checkError = "Please select an option";
  }

  return errors;
};

const questionText =
  "Do any of your relatives have hair loss or thinning hair?";
const additionalText = "Select all that apply to you.";

const noOptionField = "relatives.none";
const noOptionText = "None of these apply";

const HairRelativesPage = props => {
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

export { HairRelativesPage, validateHairRelatives };
