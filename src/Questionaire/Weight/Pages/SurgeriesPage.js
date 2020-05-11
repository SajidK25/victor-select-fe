import React from "react";
import { RadioPage } from "../../../_components/RadioPage";

const options = [
  {
    id: "yes",
    label: "I have had surgeries",
    explain: "surgeries.explain",
    explainText:
      "Please list all of your surgeries and the approximate date they were performed.",
  },
  { id: "no", label: "No prior surgeries" },
];

const validateSurgeries = (values) => {
  const errors = { surgeries: {} };
  const s = values.surgeries;

  if (!s.answer) {
    errors.surgeries.answer = "Please select an option.";
  }
  if (s.answer === "yes" && !s.explain) {
    errors.surgeries.explain = "Please provide details.";
  }

  return errors;
};

const questionText = "Have you had any surgeries in the past?";
const additionalText = "";

const SurgeriesPage = (props) => {
  return (
    <RadioPage
      name="surgeries.answer"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { SurgeriesPage, validateSurgeries };
