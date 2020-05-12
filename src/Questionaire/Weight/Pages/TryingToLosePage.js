import React from "react";
import { RadioPage } from "../../../_components";

const options = [
  { id: "1", label: "Less than one month" },
  { id: "1-3", label: "One to three months" },
  { id: "3-6", label: "Three to six months" },
  { id: "6-12", label: "Six months to one year" },
  { id: "1-3y", label: "One to three years" },
  { id: "3+y", label: "More than three years" },
];

const validateTryingToLose = (values) => {
  const errors = { tryingToLose: {} };

  if (!values.tryingToLose.answer) {
    errors.tryingToLose.answer = "Please select an option.";
  }

  return errors;
};

const questionText = "How long have you been trying to lose weight?";
const additionalText = "";

const TryingToLosePage = (props) => {
  return (
    <RadioPage
      name="tryingToLose.answer"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { TryingToLosePage, validateTryingToLose };
