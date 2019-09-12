import React from "react";
import { CheckboxPage } from "../../_components";
import { optionsAllFalse } from "../../_helpers";

const options = [
  {
    name: "sixMonth.medications",
    label: "Started new medications",
    explain: "sixMonth.medicationsExplain",
    explainText: "Please list all medications."
  },
  {
    name: "sixMonth.hormones",
    label: "Started or stopped any hormone pills or birth control pills",
    explain: "sixMonth.hormonesExplain",
    explainText: "Please list."
  }
];

const validateHairSixMonth = values => {
  const errors = { sixMonth: {} };
  const s = values.sixMonth;

  if (optionsAllFalse(options, values) && !values.sixMonth.none) {
    errors.checkError = "Please select an option";
  }
  if (s.medications && !s.medicationsExplain) {
    errors.sixMonth.medicationsExplain = "Please provide details.";
  }
  if (s.hormones && !s.hormonesExplain) {
    errors.sixMonth.hormonesExplain = "Please provide details.";
  }

  return errors;
};

const questionText = "Within six months PRIOR to the onset of your hair loss:";
const additionalText = "Select all that apply to you.";

const noOptionField = "sixMonth.none";
const noOptionText = "None of these apply";

const HairSixMonthPage = props => {
  return (
    <CheckboxPage
      options={options}
      noOptionField={noOptionField}
      noOptionText={noOptionText}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { HairSixMonthPage, validateHairSixMonth };
