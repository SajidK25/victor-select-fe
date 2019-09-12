import React from "react";
import { RadioPage } from "../../_components/RadioPage";

const options = [
  {
    id: "yes",
    label: "Yes",
    explain: "currentMeds.explain",
    explainText: "​Please list all products."
  },
  {
    id: "no",
    label: "No"
  }
];

const validateHairCurrentMeds = values => {
  const errors = { currentMeds: {} };
  const a = values.currentMeds;

  if (!a.answer) {
    errors.currentMeds.answer = "Please select an option.";
  }
  if (a.answer === "yes" && !a.explain) {
    errors.currentMeds.explain = "Please provide details";
  }

  return errors;
};

const questionText = `Are you CURRENTLY taking any medications, 
                      over-the-counter pills, and/or hormone pills?`;
const additionalText = `If yes, please list names and dosages and put an asterisk (*) by any 
                        that you were taking when your hair loss started.`;

let HairCurrentMedsPage = props => {
  return (
    <RadioPage
      name="currentMeds.answer"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { HairCurrentMedsPage, validateHairCurrentMeds };
