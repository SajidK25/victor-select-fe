import React from "react";
import { RadioPage } from "../../_components";

const options = [
  { id: "minimal", label: "Minimal" },
  { id: "mild", label: "Mild/Moderate" },
  { id: "extensive", label: "Extensive" }
];

const validateHairDegree = values => {
  const errors = { hairLoss: {} };

  if (!values.hairLoss.degree) {
    errors.hairLoss.degree = "Please select an option.";
  }

  return errors;
};

const qText =
  "How would you best characterize your current degree of hair loss?";

let HairDegreePage = props => {
  return (
    <RadioPage
      name="hairLoss.degree"
      options={options}
      questionText={qText}
      additionalText="Select one."
      {...props}
    />
  );
};

export { HairDegreePage, validateHairDegree };
