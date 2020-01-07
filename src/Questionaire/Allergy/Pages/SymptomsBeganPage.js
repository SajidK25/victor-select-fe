import React from "react";
import { RadioPage } from "../../../_components/RadioPage";

const options = [
  { id: "3mo", label: "Within the last 3 months" },
  { id: "6mo", label: "Within the last 6 months" },
  { id: "12mo", label: "Within the last year" },
  { id: "monthly", label: "More than a year ago" }
];

const validateSymptomsBegan = values => {
  const errors = { symptomsBegan: {} };
  const a = values.symptomsBegan;

  if (!a.answer) {
    errors.symptomsBegan.answer = "Please select an option.";
  }

  return errors;
};

const questionText = `When did your symptoms first begin?`;
const additionalText = "";

let SymptomsBeganPage = props => {
  return (
    <RadioPage
      name="symptomsBegan.answer"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { SymptomsBeganPage, validateSymptomsBegan };
