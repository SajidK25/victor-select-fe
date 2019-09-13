import React from "react";
import { RadioPage } from "../../_components";

const options = [
  { id: "severalDays", label: "Several days" },
  { id: "moreThanHalf", label: "More than half of the days" },
  { id: "nearlyEvery", label: "Every or nearly every day" }
];

const validateDepressionFrequency = values => {
  const errors = {};

  if (!values.depression.frequency) {
    errors.depression = { frequency: "Please select an option." };
  }

  return errors;
};

const questionText =
  "How often have you experienced the troubles you indicated?";
const additionalText = "";

let DepressionFrequencyPage = props => {
  return (
    <RadioPage
      name="depression.frequency"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { DepressionFrequencyPage, validateDepressionFrequency };
