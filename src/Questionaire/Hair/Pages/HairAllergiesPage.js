import React from "react";
import { RadioPage } from "../../../_components/RadioPage";

const options = [
  {
    id: "yes",
    label: "I have allergies",
    explain: "allergies.explain",
    explainText: "Please list all of your allergies."
  },
  { id: "no", label: "I don't have allergies" }
];

const validateHairAllergies = values => {
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

const questionText = `Do you have ANY medication allergies? Be sure to include 
  any allergies to any alopecia medicines, including but not 
  limited to minoxidil, bimatoprost, and finasteride.`;
const additionalText = "";

const HairAllergiesPage = props => {
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

export { HairAllergiesPage, validateHairAllergies };
