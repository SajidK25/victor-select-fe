import React from "react";
import { RadioPage } from "../../../_components/RadioPage";

const options = [
  { id: "91-120", label: "91 - 120" },
  { id: "121-140", label: "121 - 140" },
  { id: "141-160", label: "141 - 160" },
  { id: "161-180", label: "161 - 180" },
  { id: "over 180", label: "Over 180" },
  { id: "90 or lower", label: "90 or lower" }
];

const validateSystolic = values => {
  const errors = {};

  if (!values.bloodPressure.systolic) {
    errors.bloodPressure = { systolic: "Please select an option." };
  }

  return errors;
};

const questionText = "What is the top number of your blood pressure?";
const additionalText =
  "When your doctor takes your blood pressure, it’s expressed as a measurement with two numbers, with one number on top (systolic) and one on the bottom (diastolic), like a fraction. For example, 120/80 mm Hg. The top number refers to the amount of pressure in your arteries during the contraction of your heart muscle. This is called systolic pressure.";

let SystolicPage = props => {
  return (
    <RadioPage
      name="bloodPressure.systolic"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { SystolicPage, validateSystolic };
