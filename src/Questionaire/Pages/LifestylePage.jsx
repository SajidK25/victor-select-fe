import React from "react";
import { CheckboxPage } from "../../_components";
import { optionsAllFalse } from "../../_helpers";

const options = [
  { name: "lifestyle.smoke", label: "Smoke tobacco (or use tobacco products)" },
  { name: "lifestyle.overweight", label: "More than 50 lbs. overweight" },
  {
    name: "lifestyle.alcohol",
    label: "Have more than 2 acoholic drinks per day"
  },
  {
    name: "lifestyle.poppers",
    label: "Use Poppers or Rush",
    explain: "lifestyle.poppersExplain",
    explainText: "How frequently? When was the last time?"
  }
];

const validateLifestyle = values => {
  const errors = {};
  if (optionsAllFalse(options, values) && !values.lifestyle.none) {
    errors.checkError = "Please select an option";
  }

  if (values.lifestyle.poppers && !values.lifestyle.popperExplain) {
    errors.lifestyle = {
      poppersExplain: "How frequently? When was the last time?"
    };
  }

  return errors;
};

const questionText =
  "ED can sometimes be related to lifestyle habits. Select all that apply to you.";
const additionalText = "";

const noOptionField = "lifestyle.none";
const noOptionText = "None of these apply";

const LifestylePage = props => {
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

export { LifestylePage, validateLifestyle };
