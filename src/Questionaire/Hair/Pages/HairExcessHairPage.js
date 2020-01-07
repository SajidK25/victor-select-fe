import React from "react";
import { CheckboxPage } from "../../../_components";
import { optionsAllFalse } from "../../../_helpers";

const options = [
  { name: "excessHair.chin", label: "Chin" },
  { name: "excessHair.face", label: "Face" },
  { name: "excessHair.abdomen", label: "Abdomen" },
  { name: "excessHair.nipples", label: "Around nipples" }
];

const validateHairExcessHair = values => {
  const errors = { excessHair: {} };

  if (optionsAllFalse(options, values) && !values.excessHair.none) {
    errors.checkError = "Please select an option";
  }

  return errors;
};

const questionText = "Do you have excessive hair?";
const additionalText = "Select all that apply to you.";

const noOptionField = "excessHair.none";
const noOptionText = "None of these apply";

const HairExcessHairPage = props => {
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

export { HairExcessHairPage, validateHairExcessHair };
