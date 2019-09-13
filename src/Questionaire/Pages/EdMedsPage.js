import React from "react";
import { CheckboxPage } from "../../_components";
import { optionsAllFalse } from "../../_helpers";

const options = [
  { name: "edMeds.cialis", label: "Tadalafil (Cialis)" },
  { name: "edMeds.viagra", label: "Sildenafil (Viagra)" },
  { name: "edMeds.levitra", label: "Vardenafil (Levitra)" },
  { name: "edMeds.avanafil", label: "Avanafil (Stendra)" },
  {
    name: "edMeds.other",
    label:
      "Other (penile implants, pumps, penile invections, supplements, herbs, or over-the-counter products",
    explain: "edMeds.otherExplain",
    explainText: "Please provide details."
  }
];

const validateEdMeds = values => {
  const errors = { edMeds: {} };
  const e = values.edMeds;

  if (optionsAllFalse(options, values) && !values.edMeds.none) {
    errors.checkError = "Please select an option";
  }

  if (e.other && !e.otherExplain) {
    errors.edMeds.otherExplain = "Please provide details.";
  }

  return errors;
};

const questionText =
  "Have you ever been treated for ED? Select all of the treatments you have used regardless of whether they were successful.";
const additionalText = "";

const noOptionField = "edMeds.none";
const noOptionText = "I have never been treated for ED";

const EdMedsPage = props => {
  return (
    <CheckboxPage
      options={options}
      noOptionField={noOptionField}
      noOptionText={noOptionText}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { EdMedsPage, validateEdMeds };
