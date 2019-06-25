import React from "react";
import { RadioPage } from "../../_components";

const options = [
  { id: "no", label: "No, it starts hard but never remains hard" },
  { id: "rarely", label: "Yes, but only rarely" },
  { id: "occasionally", label: "Yes, on occasion" },
  { id: "usually", label: "Yes, more than half the time" },
  { id: "always", label: "Yes, always" }
];

const validateMasturbating = values => {
  const errors = { erectionsWhen: {} };

  if (!values.erectionsWhen.masturbatingErection) {
    errors.erectionsWhen.masturbatingErection = "Please select an option.";
  }

  return errors;
};

const qText =
  "When masturbating, does your erection remain hard as long as you would like?";

let MasturbatingPage = props => {
  return (
    <RadioPage
      name="erectionsWhen.masturbatingErection"
      options={options}
      questionText={qText}
      additionalText=""
      {...props}
    />
  );
};

export { MasturbatingPage, validateMasturbating };
