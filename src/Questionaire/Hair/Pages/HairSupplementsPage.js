import React from "react";
import { RadioPage } from "../../../_components/RadioPage";

const options = [
  {
    id: "yes",
    label: "Yes",
    explain: "supplements.explain",
    explainText: "​Please list all products."
  },
  {
    id: "no",
    label: "No"
  }
];

const validateHairSupplements = values => {
  const errors = { medicationsSupplements: {} };
  const a = values.medicationsSupplements;

  if (!a.answer) {
    errors.medicationsSupplements.answer = "Please select an option.";
  }
  if (a.answer === "yes" && !a.explain) {
    errors.medicationsSupplements.explain = "Please provide details";
  }

  return errors;
};

const questionText = `Are you CURRENTLY taking any medications, over-the-counter pills, hormone pills, vitamins and/or natural supplements?`;
const additionalText = `If yes, please list names and dosages and put an asterisk (*) by any 
                        that you were taking when your hair loss started.`;

let HairSupplementsPage = props => {
  return (
    <RadioPage
      name="medicationsSupplements.answer"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { HairSupplementsPage, validateHairSupplements };
