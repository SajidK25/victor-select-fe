import React from "react";
import { RadioPage } from "../../../_components/RadioPage";

const options = [
  { id: "never", label: "Never" },
  { id: "rarely", label: "Rarely" },
  { id: "weekly", label: "About weekly" },
  { id: "monthly", label: "About monthly" },
  { id: "quarterly", label: "About quarterly" },
];

const validateHairColored = (values) => {
  const errors = { colored: {} };
  const a = values.colored;

  if (!a.answer) {
    errors.colored.answer = "Please select an option.";
  }

  return errors;
};

const questionText = `How often is your hair colored, chemically processed, or straightened?`;
const additionalText = "";

let HairColoredPage = (props) => {
  return (
    <RadioPage
      name="colored.answer"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { HairColoredPage, validateHairColored };
