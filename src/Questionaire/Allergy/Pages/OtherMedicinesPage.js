import React from "react";
import { RadioPage } from "../../../_components/RadioPage";

const options = [
  {
    id: "yes",
    label: "Yes, I'm taking other medications",
    explain: "otherMedicines.explain",
    explainText:
      "Please list any other medications or over-the-counter products."
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

const questionText =
  "Do you take any prescription and/or non-prescription medications on a regular basis?";
const additionalText = "";

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
