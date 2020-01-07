import React from "react";
import { RadioPage } from "../../../_components";

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

const validateGenitalExam = values => {
  const errors = {};

  if (!values.genitalExam) {
    errors.genitalExam = "Please select an option.";
  }
  if (values.genitalExam === "issues" && !values.explainExam) {
    errors.explainExam = "Please provide details about your exam.";
  }
  return errors;
};

const questionText =
  "Did your exam include an exam of the genitals (including the testicles, penis)?";
const additionalText =
  "If it did not, we recommend you see a doctor before using our service.";

const GenitalExamPage = props => {
  const validate = values => {
    return true;
  };

  return (
    <RadioPage
      name="genitalExam"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { GenitalExamPage, validateGenitalExam };
