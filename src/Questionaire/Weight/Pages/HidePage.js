import React from "react";
import { RadioPage } from "../../../_components/RadioPage";

const options = [
  {
    id: "No",
    label: "No",
  },
  {
    id: "Sometimes",
    label: "Sometimes",
  },
  {
    id: "Often",
    label: "Often",
  },
  {
    id: "Always",
    label: "Always",
  },
];

const validateHide = (values) => {
  const errors = { hide: {} };

  if (!values.hide.answer) {
    errors.hide.answer = "Please select an option.";
  }

  return errors;
};

const questionText = `Do you ever hide your eating from others?`;
const additionalText = "";

let HidePage = (props) => {
  return (
    <RadioPage
      name="hide.answer"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { HidePage, validateHide };
