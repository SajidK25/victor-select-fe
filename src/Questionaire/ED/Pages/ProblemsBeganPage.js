import React from "react";
import { RadioPage } from "../../../_components/RadioPage";

const options = [
  { id: "gradually", label: "Gradually and has worsened over time" },
  {
    id: "suddenly",
    label:
      "Happened suddenly and I was unable to perform. The problem has remained.",
    explain: "explainSuddenly",
    explainText: "Please explain more about the circumstances."
  }
];

const validateProblemsBegan = values => {
  const errors = {};

  if (!values.problemsBegan) {
    errors.problemsBegan = "Please select an option.";
  }

  if (values.problemsBegan === "suddenly" && !values.explainSuddenly) {
    errors.explainSuddenly = "Please explain more about the circumstances.";
  }

  return errors;
};

const questionText = "How did your erectile dysfunction start?";
const additionalText =
  "Select the option that most closely describes your situation.";

let ProblemsBeganPage = props => {
  return (
    <RadioPage
      name="problemsBegan"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { ProblemsBeganPage, validateProblemsBegan };
