import React from "react";
// import SvgIcon from "@material-ui/core/SvgIcon"
import { RadioPage } from "../../../_components";

const validateHairLossType = values => {
  const errors = { hairLoss: {} };

  if (!values.hairLoss.type) {
    errors.hairLoss.type = "Please make a selection.";
  }

  return errors;
};

const options = [
  { id: "breaking", label: "Breaking off" },
  { id: "roots", label: "Coming out at the roots" },
  { id: "unsure", label: "Unsure" }
];

const questionText = "Select the type of hair loss you're experiencing.";
const additionalText = "";

const HairLossTypePage = props => {
  return (
    <RadioPage
      name="hairLoss.type"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { HairLossTypePage, validateHairLossType };
