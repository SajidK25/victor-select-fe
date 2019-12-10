import React from "react";
import { CheckboxPage } from "../../../_components";
import { optionsAllFalse } from "../../../_helpers";

const options = [
  { name: "lifestyle.smoke", label: "Smoke tobacco (or use tobacco products)" },
  { name: "lifestyle.overweight", label: "More than 50 lbs. overweight" },
  {
    name: "lifestyle.alcohol",
    label: "Have more than 2 alcoholic drinks per day"
  }
];

const validateHairLifestyle = values => {
  const errors = {};
  if (optionsAllFalse(options, values) && !values.lifestyle.none) {
    errors.checkError = "Please select an option";
  }
  return errors;
};

const questionText = "Hair loss can sometimes be related to lifestyle habits.";
const additionalText = "Select all that apply to you.";

const noOptionField = "lifestyle.none";
const noOptionText = "None of these apply";

const HairLifestylePage = props => {
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

export { HairLifestylePage, validateHairLifestyle };
