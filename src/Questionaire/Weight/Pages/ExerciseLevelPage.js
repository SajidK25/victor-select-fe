import React from "react";
import { RadioPage } from "../../../_components/RadioPage";

const options = [
  {
    id: "inactive",
    label: "Inactive – No regular physical activity with a sit-down job",
  },
  {
    id: "light",
    label: "Light – No organized physical activity during leisure time",
  },
  {
    id: "moderate",
    label:
      "Moderate – Occasionally involved, such as weekend golf, tennis, jogging, or swimming",
  },
  {
    id: "vigorous",
    label:
      "Vigorous – extensive physical exercise for at least 60 minutes per session 4 times per week",
  },
];

const validateExerciseLevel = (values) => {
  const errors = { exercise: {} };

  if (!values.exercise.level) {
    errors.exercise.level = "Please select an option.";
  }

  return errors;
};

const questionText = "What is your activity level?";
const additionalText = "Choose one";

let ExerciseLevelPage = (props) => {
  return (
    <RadioPage
      name="exercise.level"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { ExerciseLevelPage, validateExerciseLevel };
