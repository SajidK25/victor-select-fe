import React from "react";
import { CheckboxPage } from "../../../_components";
import { optionsAllFalse } from "../../../_helpers";

const options = [
  { name: "lowestWeight.diet", label: "Diet" },
  { name: "lowestWeight.exercise", label: "Exercise" },
  { name: "lowestWeight.prescription", label: "Prescription medications" },
  { name: "lowestWeight.surgery", label: "Surgery" },
  { name: "lowestWeight.counseling", label: "Counseling" },
];

const validateLowestWeightHow = (values) => {
  const l = values.lowestWeight;
  const errors = { lowestWeight: {} };

  if (optionsAllFalse(options, values) && !l.none) {
    errors.checkError = "Please select an option";
  }

  return errors;
};

const questionText = "What did you do to get to your lowest weight?";
const additionalText = "Check all that apply.";

const noOptionField = "lowestWeight.none";
const noOptionText = "None of these apply";

const LowestWeightHowPage = (props) => {
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

export { LowestWeightHowPage, validateLowestWeightHow };
