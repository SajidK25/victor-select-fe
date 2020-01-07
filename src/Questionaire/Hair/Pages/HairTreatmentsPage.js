import React from "react";
import { RadioPage } from "../../../_components/RadioPage";

const options = [
  {
    id: "yes",
    label: "Yes",
    explain: "treatments.explain",
    explainText: "​Please list all treatments."
  },
  {
    id: "no",
    label: "No"
  }
];

const validateHairTreatments = values => {
  const errors = { treatments: {} };
  const a = values.treatments;

  if (!a.answer) {
    errors.treatments.answer = "Please select an option.";
  }
  if (a.answer === "yes" && !a.explain) {
    errors.treatments.explain = "Please provide details";
  }

  return errors;
};

const questionText = `Have you tried prescription medications, supplements, 
        injections, and shampoos/solutions to treat your hair loss?`;
const additionalText = `If so, please list the treatment or product, when you tried it, for how long and if it was effective.`;

let HairTreatmentsPage = props => {
  return (
    <RadioPage
      name="treatments.answer"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { HairTreatmentsPage, validateHairTreatments };
