import React from "react";
import { RadioPage } from "../../../_components/RadioPage";

const options = [
  {
    id: "yes",
    label: "Yes",
  },
  {
    id: "no",
    label: "No",
  },
];

const validateStayedSame = (values) => {
  const errors = { stayedSame: {} };

  if (!values.stayedSame.answer) {
    errors.stayedSame.answer = "Please select an option.";
  }

  return errors;
};

const questionText =
  "Have you ever stayed the same weight for 10 or more years?";
const additionalText = "Within 15-20 lbs.";

let StayedSamePage = (props) => {
  return (
    <RadioPage
      name="stayedSame.answer"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { StayedSamePage, validateStayedSame };
