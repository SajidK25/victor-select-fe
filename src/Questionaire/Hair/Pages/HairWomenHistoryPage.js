import React from "react";
import { CheckboxPage } from "../../../_components";
import { optionsAllFalse } from "../../../_helpers";

const options = [
  {
    name: "women.pregnant",
    label: "Difficulty becoming pregnant"
  },
  {
    name: "women.postmenopausal",
    label: "Postmenopausal",
    explain: "women.postmenopausalExplain",
    explainText: "At what age?"
  },
  {
    name: "women.hysterectomy",
    label: "Hysterectomy",
    explain: "women.hysterectomyExplain",
    explainText: "When did you have a hysterectomy?"
  },
  {
    name: "women.ovaries",
    label: "Ovaries removed",
    explain: "women.ovariesExplain",
    explainText: "When were they removed?"
  }
];

const validateHairWomenHistory = values => {
  const errors = { women: {} };
  const s = values.women;

  if (optionsAllFalse(options, values) && !values.women.none) {
    errors.checkError = "Please select an option";
  }
  if (s.hysterectomy && !s.hysterectomyExplain) {
    errors.women.hysterectomyExplain = "Please provide details.";
  }
  if (s.postmenopausal && !s.postmenopausalExplain) {
    errors.women.postmenopausalExplain = "Please provide details.";
  }
  if (s.ovaries && !s.ovariesExplain) {
    errors.women.ovariesExplain = "Please provide details.";
  }

  return errors;
};

const questionText = "Have you had these conditions?";
const additionalText = "Select all that apply to you.";

const noOptionField = "women.none";
const noOptionText = "None of these apply";

const HairWomenHistoryPage = props => {
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

export { HairWomenHistoryPage, validateHairWomenHistory };
