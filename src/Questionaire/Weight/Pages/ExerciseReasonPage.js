import React from "react";
import { RadioPage } from "../../../_components/RadioPage";

const options = [
  {
    id: "yes",
    label: "Yes",
    explain: "exercise.reasonExplain",
    explainText: "Please explain.",
  },
  { id: "no", label: "No" },
];

const validateExerciseReason = (values) => {
  const errors = { exercise: {} };
  const e = values.exercise;

  if (!e.reason) {
    errors.exercise.reason = "Please select an option.";
  }
  if (e.reason === "yes" && !e.reasonExplain) {
    errors.exercise.reasonExplain = "Please provide details.";
  }

  return errors;
};

const questionText =
  "Are there any physical/health reasons that prevent you from exercising?";
const additionalText = "";

const ExerciseReasonPage = (props) => {
  return (
    <RadioPage
      name="exercise.reason"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { ExerciseReasonPage, validateExerciseReason };
