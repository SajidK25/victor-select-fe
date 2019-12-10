import React from "react";
import { RadioPage } from "../../../_components";

const erectionChoices = [
  { id: "every_time", label: "Yes, every time I want an erection" },
  { id: "sometimes", label: "Yes, sometimes when I want an erection" },
  { id: "rarely", label: "Yes, rarely when I want an erection" }
];

const validateErection = values => {
  const errors = {};

  if (!values.getErections) {
    errors.getErections = "Please select an option.";
  }

  return errors;
};

const questionText =
  "Do you ever have a problem getting or maintaining an erection that is satisfying enough for sex?";
const additionalText = "";

let ErectionPage = props => {
  return (
    <RadioPage
      name="getErections"
      options={erectionChoices}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { ErectionPage, validateErection };
