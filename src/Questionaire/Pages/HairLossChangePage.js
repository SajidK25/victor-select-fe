import React from "react";
// import SvgIcon from "@material-ui/core/SvgIcon"
import { RadioPage } from "../../_components";

const validateHairLossChange = values => {
  const errors = { hairLoss: {} };

  if (!values.hairLoss.change) {
    errors.hairLoss.change = "Please make a selection.";
  }

  return errors;
};

const options = [
  { id: "better", label: "Better" },
  { id: "worse", label: "Worse" },
  { id: "same", label: "Same" }
];

const questionText =
  "Since the time you first had hair loss, how has your hair loss been?";
const additionalText = "";

const HairLossChangePage = props => {
  return (
    <RadioPage
      name="hairLoss.change"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { HairLossChangePage, validateHairLossChange };
