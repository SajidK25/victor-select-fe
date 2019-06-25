import React from "react";
import { CheckboxPage } from "../../_components";
import { optionsAllFalse } from "../../_helpers";

const options = [
  {
    name: "depression.noInterest",
    label: "Little interest or pleasure in doing things"
  },
  {
    name: "depression.feelingDown",
    label: "Feeling down, depressed or hopeless"
  },
  {
    name: "depression.worrying",
    label: "Worrying too much about various things"
  },
  { name: "depression.anxious", label: "Feeling nervous, anxious, or on edge" }
];

const validateDepression = values => {
  const errors = {};
  if (optionsAllFalse(options, values) && !values.depression.none) {
    errors.checkError = "Please select an option";
  }
  return errors;
};

const questionText =
  "In the last several weeks, have you found yourself bothered by any of the following?";
const additionalText = "(check all that apply)";

const noOptionField = "depression.none";
const noOptionText = "None of these apply";

const DepressionPage = props => {
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

export { DepressionPage, validateDepression };
