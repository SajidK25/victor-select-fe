import React from "react";
import { RadioPage } from "../../../_components/RadioPage";

const options = [
  { id: "1", label: "One" },
  { id: "2", label: "Two" },
  { id: "3", label: "Three" },
  { id: "4", label: "Four" },
  { id: "5+", label: "Five or More" }
];

const validateInfectionsPerYear = values => {
  const errors = { infectionsPerYear: {} };
  const a = values.infectionsPerYear;

  if (!a.answer) {
    errors.infectionsPerYear.answer = "Please select an option.";
  }

  return errors;
};

const questionText = `How many colds, upper respiratory or sinus infections do you usually have per year?`;
const additionalText = "";

let InfectionsPerYearPage = props => {
  return (
    <RadioPage
      name="infectionsPerYear.answer"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { InfectionsPerYearPage, validateInfectionsPerYear };
