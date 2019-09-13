import React from "react";
import { CheckboxPage } from "../../_components";
import { optionsAllFalse } from "../../_helpers";

const options = [
  { name: "erectionsWhen.whenMasturbating", label: "When masturbating" },
  {
    name: "erectionsWhen.onWaking",
    label: "When asleep or first thing in the morning"
  }
];

const validateErectionWhen = values => {
  const errors = {};

  if (optionsAllFalse(options, values) && !values.erectionsWhen.none) {
    errors.checkError = "Please select an option";
  }

  return errors;
};

const noOptionField = "erectionsWhen.none";
const noOptionText = "Neither of these apply";

const questionText = "Do you get an erection during the following?";
const additionalText = "(check all that apply)";

let ErectionWhenPage = props => {
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

export { ErectionWhenPage, validateErectionWhen };
