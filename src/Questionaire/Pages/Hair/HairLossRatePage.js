import React from "react";
// import SvgIcon from "@material-ui/core/SvgIcon"
import { RadioPage } from "../../../_components";

const validateHairLossRate = values => {
  const errors = { hairLoss: {} };

  if (!values.hairLoss.rapid) {
    errors.hairLoss.rapid = "Please make a selection.";
  }

  return errors;
};

const options = [
  { id: "sudden", label: "Sudden" },
  { id: "gradual", label: "Gradual" }
];

const questionText = "How rapid was your hair loss?";
const additionalText = "";

const HairLossRatePage = props => {
  return (
    <RadioPage
      name="hairLoss.rapid"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { HairLossRatePage, validateHairLossRate };
