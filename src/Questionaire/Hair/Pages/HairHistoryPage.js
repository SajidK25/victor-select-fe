import React from "react";
import { CheckboxPage } from "../../../_components";
import { optionsAllFalse } from "../../../_helpers";

const options = [
  {
    name: "history.anemia",
    label: "Anemia or low iron",
    explain: "history.anemiaExplain",
    explainText: "Are you on any treatment? Please explain."
  },

  {
    name: "history.thyroid",
    label: "Thyroid disorders",
    explain: "history.thyroidExplain",
    explainText: "Are you on any treatment? Please explain."
  }
];

const validateHairHistory = values => {
  const errors = { history: {} };
  const s = values.history;

  if (optionsAllFalse(options, values) && !values.history.none) {
    errors.checkError = "Please select an option";
  }
  if (s.anemia && !s.anemiaExplain) {
    errors.history.anemiaExplain = "Please provide details.";
  }
  if (s.thyroid && !s.thyroidExplain) {
    errors.history.thyroidExplain = "Please provide details.";
  }

  return errors;
};

const questionText = "Do you have a history of these conditions?";
const additionalText = "Select all that apply to you.";

const noOptionField = "history.none";
const noOptionText = "None of these apply";

const HairHistoryPage = props => {
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

export { HairHistoryPage, validateHairHistory };
