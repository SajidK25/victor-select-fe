import React from "react";
import { EdMedsExplainPage } from "./";

const dosageOptions = [
  { id: "2.5mg", label: "2.5mg" },
  { id: "5mg", label: "5mg" },
  { id: "10mg", label: "10mg" },
  { id: "20mg", label: "20mg" },
  { id: "no", label: "I can't remember" }
];

const questionText = "What was the dose of Vardenafil (Levitra)?";

const validateEdMedsLevitraExplain = values => {
  const errors = {};
  if (!values.edMeds.levitraDose) {
    errors.edMeds = { levitraDose: "Please choose an option." };
  }
  return errors;
};

let EdMedsLevitraExplainPage = props => {
  return (
    <EdMedsExplainPage
      dosageOptions={dosageOptions}
      dosageName="edMeds.levitraDose"
      workedName="edMeds.levitraWorked"
      sideEffectsName="edMeds.levitraSideEffects"
      questionText={questionText}
      {...props}
    />
  );
};

export { EdMedsLevitraExplainPage, validateEdMedsLevitraExplain };
