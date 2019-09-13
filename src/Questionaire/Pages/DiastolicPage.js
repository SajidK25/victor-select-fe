import React from "react";
import { RadioPage } from "../../_components";

const options = [
  { id: "61-80", label: "61-80" },
  { id: "81-90", label: "81-90" },
  { id: "91-100", label: "91-100" },
  { id: "101-110", label: "101-110" },
  { id: "over 110", label: "Over 110" },
  { id: "60 or lower", label: "60 or lower" }
];

const validateDiastolic = values => {
  const errors = {};

  if (!values.bloodPressure.diastolic) {
    errors.bloodPressure = { diastolic: "Please select an option." };
  }

  return errors;
};

const questionText = "What is the bottom number of your blood pressure?";
const additionalText =
  "The bottom number refers to your blood pressure when your heart muscle is between beats. This is called diastolic pressure.";

let DiastolicPage = props => {
  return (
    <RadioPage
      name="bloodPressure.diastolic"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { DiastolicPage, validateDiastolic };
