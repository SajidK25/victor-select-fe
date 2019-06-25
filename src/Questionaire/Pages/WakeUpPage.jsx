import React from "react";
import { RadioPage } from "../../_components";

const options = [
  { id: "rarely", label: "Rarely" },
  { id: "occasionally", label: "Occasionally" },
  { id: "everytime", label: "Everytime" }
];

const validateWakeUp = values => {
  const errors = { erectionsWhen: {} };

  if (!values.erectionsWhen.wakingErection) {
    errors.erectionsWhen.wakingErection = "Please select an option.";
  }

  return errors;
};

const questionText = "How often do you wake up with an erection?";
const additionalText = "";

let WakeUpPage = props => {
  return (
    <RadioPage
      name="erectionsWhen.wakingErection"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { WakeUpPage, validateWakeUp };
