import React from "react";
import { RadioPage } from "../../_components/RadioPage";

const options = [
  { id: "never", label: "Never" },
  { id: "rarely", label: "Rarely" },
  { id: "weekly", label: "About weekly" },
  { id: "monthly", label: "About monthly" },
  { id: "quarterly", label: "About quarterly" }
];

const validateHairColored = values => {
  const errors = { currentMeds: {} };
  const a = values.currentMeds;

  if (!a.answer) {
    errors.currentMeds.answer = "Please select an option.";
  }
  if (a.answer === "yes" && !a.explain) {
    errors.currentMeds.explain = "Please provide details";
  }

  return errors;
};

const questionText = `How often is your hair colored, chemically processed, or straightened?`;
const additionalText = "";

let HairColoredPage = props => {
  return (
    <RadioPage
      name="currentMeds.answer"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { HairColoredPage, validateHairColored };
