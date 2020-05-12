import React from "react";
import { RadioPage } from "../../../_components/RadioPage";

const options = [
  {
    id: "excellent",
    label: "Excellent",
  },
  {
    id: "good",
    label: "Good",
  },
  {
    id: "average",
    label: "Average",
  },
  {
    id: "poor",
    label: "Poor",
  },
];

const validateGeneralHealth = (values) => {
  const errors = { generalHealth: {} };

  if (!values.generalHealth.answer) {
    errors.generalHealth.answer = "Please select an option.";
  }

  return errors;
};

const questionText = "How would you rate your health in general?";
const additionalText = "";

let GeneralHealthPage = (props) => {
  return (
    <RadioPage
      name="generalHealth.answer"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { GeneralHealthPage, validateGeneralHealth };
