import React from "react";
import { CheckboxPage } from "../../../_components";
import { optionsAllFalse } from "../../../_helpers";

const options = [
  {
    name: "dieting.actively",
    label: "Actively dieting",
    explain: "dieting.activelyExplain",
    explainText: "What type of diet?"
  },

  {
    name: "dieting.vegan",
    label: "Vegetarian or vegan"
  }
];

const validateHairDieting = values => {
  const errors = { dieting: {} };
  const s = values.dieting;

  if (optionsAllFalse(options, values) && !values.dieting.none) {
    errors.checkError = "Please select an option";
  }
  if (s.actively && !s.activelyExplain) {
    errors.dieting.activelyExplain = "Please provide details.";
  }

  return errors;
};

const questionText = "Tell us about your current eating habits.";
const additionalText = "Select all that apply to you.";

const noOptionField = "dieting.none";
const noOptionText = "None of these apply";

const HairDietingPage = props => {
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

export { HairDietingPage, validateHairDieting };
