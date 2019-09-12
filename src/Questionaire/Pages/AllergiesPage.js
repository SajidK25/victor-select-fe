import React from "react";
import { RadioPage } from "../../_components/RadioPage";

const options = [
  {
    id: "yes",
    label: "I have allergies",
    explain: "allergies.explain",
    explainText: "Please list all of your allergies."
  },
  { id: "no", label: "I don't have allergies" }
];

const validateAllergies = values => {
  const errors = { allergies: {} };
  const a = values.allergies;

  if (!a.have) {
    errors.allergies.have = "Please select an option.";
  }
  if (a.have === "yes" && !a.explain) {
    errors.allergies.explain = "Please provide details.";
  }

  return errors;
};

const questionText =
  "Do you have ANY allergies (medications, food, dyes, etc.)?";
const additionalText =
  "Be sure to include any allergies to galactose, phenylalanine, or to any ED medicines, including but not limited to: avanafil (Stendra), sildenafil (Revatio / Viagra), tadalfil (Cialis), and vardenafil (Levitra, Staxyn).";

const AllergiesPage = props => {
  return (
    <RadioPage
      name="allergies.have"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { AllergiesPage, validateAllergies };
