import React from "react";
import { EdMedsExplainPage } from "./";

const dosageOptions = [
  { id: "2.5mg", label: "2.5mg" },
  { id: "5mg", label: "5mg" },
  { id: "10mg", label: "10mg" },
  { id: "20mg", label: "20mg" },
  { id: "no", label: "I can't remember" }
];

const questionText = "What was the dose of Tadalafil (Cialis)?";

const validateEdMedsCialisExplain = values => {
  const errors = {};
  if (!values.edMeds.cialisDose) {
    errors.edMeds = { cialisDose: "Please select a dose option." };
  }
  return errors;
};

const EdMedsCialisExplainPage = props => {
  return (
    <EdMedsExplainPage
      dosageOptions={dosageOptions}
      dosageName="edMeds.cialisDose"
      workedName="edMeds.cialisWorked"
      sideEffectsName="edMeds.cialisSideEffects"
      questionText={questionText}
      {...props}
    />
  );
};

export { EdMedsCialisExplainPage, validateEdMedsCialisExplain };
