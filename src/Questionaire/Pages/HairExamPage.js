import React from "react";
import { RadioPage } from "../../_components";

const options = [
  { id: "normal", label: "Yes, it was normal." },
  {
    id: "issues",
    label: "Yes, but there were issues.",
    explain: "explainExam",
    explainText: "Please provide details about your exam."
  },
  { id: "notExamined", label: "No" }
];

const validateHairExam = values => {
  const errors = {};

  if (!values.hairExam) {
    errors.hairExam = "Please select an option.";
  }
  if (values.hairExam === "issues" && !values.explainExam) {
    errors.explainExam = "Please provide details about your exam.";
  }
  return errors;
};

const questionText = "Did your exam include an exam of your hair?";
const additionalText = "";

const HairExamPage = props => {
  return (
    <RadioPage
      name="hairExam"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { HairExamPage, validateHairExam };
