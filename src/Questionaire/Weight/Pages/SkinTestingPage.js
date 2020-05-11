import React from "react";
import { RadioPage } from "../../../_components/RadioPage";

const options = [
  {
    id: "yes",
    label: "Yes, I have had skin testing",
    explain: "skinTesting.explain",
    explainText: "When did you have skin testing?"
  },
  { id: "no", label: "No, I have not had skin testing" }
];

const validateSkinTesting = values => {
  const errors = { skinTesting: {} };
  const o = values.skinTesting;

  if (!o.answer) {
    errors.skinTesting.answer = "Please select an option.";
  }
  if (o.answer === "yes" && !o.explain) {
    errors.skinTesting.explain = "Please provide details.";
  }

  return errors;
};

const questionText = "Have you had previous allergy skin testing?";
const additionalText = "";

const SkinTestingPage = props => {
  return (
    <RadioPage
      name="skinTesting.answer"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { SkinTestingPage, validateSkinTesting };
