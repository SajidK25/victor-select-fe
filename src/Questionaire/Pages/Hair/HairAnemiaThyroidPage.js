import React from "react";
import { CheckboxPage } from "../../../_components";
import { optionsAllFalse } from "../../../_helpers";

const options = [
  { name: "anemiaThyroid.lowIron", label: "Low iron levels" },
  { name: "anemiaThyroid.brittleNails", label: "Brittle nails" },
  { name: "anemiaThyroid.lowThyroid", label: "Low thyroid levels" },
  { name: "anemiaThyroid.coldIntolerance", label: "Cold intolerance" },
  { name: "anemiaThyroid.fatigue", label: "Fatigue" },
  { name: "anemiaThyroid.weightGain", label: "Weight gain" }
];

const validateHairAnemiaThyroid = values => {
  const errors = {};

  if (optionsAllFalse(options, values) && !values.anemiaThyroid.none) {
    errors.checkError = "Please select an option";
  }

  return errors;
};

const questionText = `Alopecia can be a sign of anemia and/or thyroid issues. 
   Depending on your risk factors, you may need to see a doctor in person and not use our service.
   Which of the following additional risk factors do you have for anemia or thyroid issues?`;
const additionalText = "Check all that apply.";

const noOptionField = "anemiaThyroid.none";
const noOptionText = "None of these apply";

const HairAnemiaThyroidPage = props => {
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

export { HairAnemiaThyroidPage, validateHairAnemiaThyroid };
