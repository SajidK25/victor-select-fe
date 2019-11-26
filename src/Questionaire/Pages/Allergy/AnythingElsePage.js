import React from "react";
import { RadioPage } from "../../../_components/RadioPage";

const options = [
  {
    id: "yes",
    label: "Yes",
    explain: "anythingElse.explain",
    explainText: "​Please list anything else we should know about you."
  },
  {
    id: "no",
    label: "No"
  }
];

const validateAnythingElse = values => {
  const errors = { anythingElse: {} };
  const a = values.anythingElse;

  if (!a.answer) {
    errors.anythingElse.answer = "Please select an option.";
  }
  if (a.answer === "yes" && !a.explain) {
    errors.anythingElse.explain = "Please provide details";
  }

  return errors;
};

const questionText =
  "Is there anything else you would like us to know about your allergy problems?";
const additionalText = "";

let AnythingElsePage = props => {
  return (
    <RadioPage
      name="anythingElse.answer"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { AnythingElsePage, validateAnythingElse };
