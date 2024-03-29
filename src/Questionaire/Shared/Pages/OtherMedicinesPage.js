import React from "react";
import { RadioPage } from "../../../_components/RadioPage";

const options = [
  {
    id: "yes",
    label: "Yes, I'm taking other medications",
    explain: "otherMedicines.explain",
    explainText:
      "Please list any other medications or over-the-counter products that you have not mentioned in previous questions."
  },
  { id: "no", label: "No, I'm not taking medications" }
];

const validateOtherMedicines = values => {
  const errors = { otherMedicines: {} };
  const o = values.otherMedicines;

  if (!o.taking) {
    errors.otherMedicines.taking = "Please select an option.";
  }
  if (o.taking === "yes" && !o.explain) {
    errors.otherMedicines.explain = "Please provide details.";
  }

  return errors;
};

const questionText = "Please list all medications you are currently taking.";
const additionalText =
  "Include prescriptions and over-the-counter products like pain relievers, sleep aids, vitamins, herbs and other supplements.";

const OtherMedicinesPage = props => {
  return (
    <RadioPage
      name="otherMedicines.taking"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { OtherMedicinesPage, validateOtherMedicines };
