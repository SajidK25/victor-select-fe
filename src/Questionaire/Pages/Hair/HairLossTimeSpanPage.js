import React from "react";
import { RadioPage } from "../../../_components";

const options = [
  { id: "<6m", label: "Less than 6 months" },
  { id: "6m-3y", label: "6 months to 3 years" },
  { id: "3-5y", label: "3 to 5 years" },
  { id: ">5y", label: "More than 5 years" },
  { id: ">10y", label: "More than 10 years" }
];

const validateHairLossTimeSpan = values => {
  const errors = { hairLoss: {} };

  if (!values.hairLoss.timeSpan) {
    errors.hairLoss.timeSpan = "Please select an option.";
  }

  return errors;
};

const qText =
  "How long have you had hair loss or what is your earliest memory of your hair density changing?";

let HairLossTimeSpanPage = props => {
  return (
    <RadioPage
      name="hairLoss.timeSpan"
      options={options}
      questionText={qText}
      additionalText=""
      {...props}
    />
  );
};

export { HairLossTimeSpanPage, validateHairLossTimeSpan };
