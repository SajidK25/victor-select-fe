import React from "react";
import { RadioPage } from "../../_components/RadioPage";

const options = [
  { id: "regular", label: "Regular" },
  {
    id: "irregular",
    label: "Irregular"
  }
];

const validateHairPeriod = values => {
  const errors = { women: {} };
  const a = values.women;

  if (!a.period) {
    errors.women.period = "Please select an option.";
  }

  return errors;
};

const questionText = `Are your periods typically?`;
const additionalText = "";

let HairPeriodPage = props => {
  return (
    <RadioPage
      name="women.period"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { HairPeriodPage, validateHairPeriod };
