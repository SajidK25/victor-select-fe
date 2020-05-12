import React from "react";
import { RadioPage } from "../../../_components/RadioPage";

const options = [
  {
    id: "always",
    label: "Always calm and easygoing",
  },
  {
    id: "sometimes",
    label: "Sometimes calm with frequent impatience",
  },
  {
    id: "seldom",
    label: "Seldom calm and persistently driving for advancement",
  },
  {
    id: "never",
    label: "Never calm and have overwhelming ambition",
  },
  {
    id: "driver",
    label: "Hard driving and can never relax",
  },
];

const validateDescribes = (values) => {
  const errors = { describes: {} };

  if (!values.describes.answer) {
    errors.describes.answer = "Please select an option.";
  }

  return errors;
};

const questionText = `Which of the following best describes you?`;
const additionalText = "";

let DescribesPage = (props) => {
  return (
    <RadioPage
      name="describes.answer"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { DescribesPage, validateDescribes };
