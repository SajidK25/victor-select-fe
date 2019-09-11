import React from "react";
import { RadioPage } from "../../_components/RadioPage";

const options = [
  {
    id: "yes",
    label: "I have allergies",
    explain: "allergies.explain",
    explainText: "Please list all of your allergies."
  },
  { id: "no", label: "I don't have allergies" }
];

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

export { SleepAllergiesPage };
