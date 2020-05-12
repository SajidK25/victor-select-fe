import React from "react";
import { RadioPage } from "../../../_components/RadioPage";

const options = [
  {
    id: "yes",
    label: "Yes",
    explain: "medications.explain",
    explainText:
      "Please list medications, duration, any weight loss, any side effects and if you're still taking.",
  },
  { id: "no", label: "No" },
];

const validateMedications = (values) => {
  const errors = { medications: {} };
  const o = values.medications;

  if (!o.answer) {
    errors.medications.answer = "Please select an option.";
  }
  if (o.taking === "yes" && !o.explain) {
    errors.medications.explain = "Please provide details.";
  }

  return errors;
};

const questionText =
  "Have you taken weight loss medications (OTC and prescription)?";
const additionalText = "";

const MedicationsPage = (props) => {
  return (
    <RadioPage
      name="medications.answer"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { MedicationsPage, validateMedications };
