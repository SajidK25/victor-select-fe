import React from "react";
import { RadioPage } from "../../../_components/RadioPage";

const options = [
  {
    id: "yes",
    label: "Yes",
    explain: "supplements.explain",
    explainText:
      "Please list supplements, duration, any weight loss, any side effects and if you're still taking.",
  },
  { id: "no", label: "No" },
];

const validateSupplements = (values) => {
  const errors = { supplements: {} };
  const s = values.supplements;

  if (!s.answer) {
    errors.supplements.answer = "Please select an option.";
  }
  if (s.answer === "yes" && !s.explain) {
    errors.supplements.explain = "Please provide details.";
  }

  return errors;
};

const questionText = "Have you taken weight loss supplements?";
const additionalText = "";

const SupplementsPage = (props) => {
  return (
    <RadioPage
      name="supplements.answer"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { SupplementsPage, validateSupplements };
