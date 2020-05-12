import React from "react";
import { RadioPage } from "../../../_components/RadioPage";

const options = [
  {
    id: "yes",
    label: "Yes",
    explain: "smoke.explain",
    explainText: "How often do you smoke?",
  },
  { id: "no", label: "No" },
];

const validateSmoke = (values) => {
  const errors = { smoke: {} };
  const s = values.smoke;

  if (!s.answer) {
    errors.smoke.answer = "Please select an option.";
  }
  if (s.answer === "yes" && !s.explain) {
    errors.smoke.explain = "Please provide details.";
  }

  return errors;
};

const questionText = "Do you smoke?";
const additionalText = "";

const SmokePage = (props) => {
  return (
    <RadioPage
      name="smoke.answer"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { SmokePage, validateSmoke };
