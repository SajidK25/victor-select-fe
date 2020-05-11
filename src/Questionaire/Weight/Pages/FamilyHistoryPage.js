import React from "react";
import { CheckboxPage } from "../../../_components";
import { optionsAllFalse } from "../../../_helpers";

const options = [
  {
    name: "familyHistory.heartDisease",
    label: "Heart Disease",
  },
  {
    name: "familyHistory.diabetes",
    label: "Diabetes",
  },
  {
    name: "familyHistory.cholesterol",
    label: "High Cholesterol/Lipids",
  },
  {
    name: "familyHistory.thyroid",
    label: "Thyroid Disease",
  },
];

const validateFamilyHistory = (values) => {
  const f = values.familyHistory;
  const errors = { familyHistory: {} };

  if (optionsAllFalse(options, values) && !f.none) {
    errors.checkError = "Please select an option";
  }

  return errors;
};

const questionText = "Is there family history of any of these conditions?";
const additionalText = "Check all that apply.";

const noOptionField = "familyHistory.none";
const noOptionText = "None of these apply";

const FamilyHistoryPage = (props) => {
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

export { FamilyHistoryPage, validateFamilyHistory };
