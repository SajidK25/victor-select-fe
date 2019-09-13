import React from "react";
import { RadioPage } from "../../_components";

const options = [
  { id: "2", label: "2 doses per night" },
  { id: "3", label: "3 doses per night" }
];

const validateSleepPillsPerNight = values => {
  const errors = { subscription: {} };
  const s = values.subscription;

  if (!s.doseOption) {
    errors.subscription.doseOption = "Please select an option.";
  }

  return errors;
};

const questionText = "** How should this option be presented?";

let SleepPillsPerNightPage = props => {
  let additionalText = "";

  return (
    <RadioPage
      name="subscription.doseOption"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { SleepPillsPerNightPage, validateSleepPillsPerNight };
