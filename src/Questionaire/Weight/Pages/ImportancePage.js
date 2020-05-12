import React from "react";
import { RadioPage } from "../../../_components/RadioPage";

const options = [
  {
    id: "low",
    label: "Low importance",
  },
  {
    id: "medium",
    label: "It's important, but I don't want to work too hard at it.",
  },
  {
    id: "important",
    label: "It's important to me. I'm ready to make a change.",
  },
  {
    id: "extremely",
    label: "Extremely important, I'm very motivated to be successful.",
  },
];

const validateImportance = (values) => {
  const errors = { importance: {} };

  if (!values.importance.answer) {
    errors.importance.answer = "Please select an option.";
  }

  return errors;
};

const questionText =
  "At this time, how important is it to lose weight and keep it off?";
const additionalText = "";

let ImportancePage = (props) => {
  return (
    <RadioPage
      name="importance.answer"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { ImportancePage, validateImportance };
