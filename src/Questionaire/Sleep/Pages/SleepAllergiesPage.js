import React from "react";
import { RadioPage } from "../../../_components/RadioPage";

const options = [
  {
    id: "yes",
    label: "I have allergies",
    explain: "allergies.explain",
    explainText: "Please list all of your allergies."
  },
  { id: "no", label: "I don't have allergies" }
];
const validateSleepAllergies = values => {
  const errors = { allergies: {} };
  const a = values.allergies;

  if (!a.have) {
    errors.allergies.have = "Please select an option.";
  }
  if (a.have === "yes" && !a.explain) {
    errors.allergies.explain = "Please provide details.";
  }

  return errors;
};

const questionText =
  "Do you have ANY allergies (medications, food, dyes, etc.)?";
const additionalText = "";

const SleepAllergiesPage = props => {
  return (
    <RadioPage
      name="allergies.have"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { SleepAllergiesPage, validateSleepAllergies };
