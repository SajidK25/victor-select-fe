import React from "react";
import { EdMedsExplainPage } from "./";

const dosageOptions = [
  { id: "50mg", label: "50mg" },
  { id: "100mg", label: "100mg" },
  { id: "200mg", label: "200mg" },
  { id: "no", label: "I can't remember" }
];

const questionText = "What was the dose of Avanafil?";

const validateEdMedsAvanafilExplain = values => {
  const errors = {};
  if (!values.edMeds.avanafilDose) {
    errors.edMeds = { avanafilDose: "Please select a dose option." };
  }
  return errors;
};

const EdMedsAvanafilExplainPage = props => {
  return (
    <EdMedsExplainPage
      dosageOptions={dosageOptions}
      dosageName="edMeds.avanafilDose"
      workedName="edMeds.avanafilWorked"
      sideEffectsName="edMeds.avanafilSideEffects"
      questionText={questionText}
      {...props}
    />
  );
};

export { EdMedsAvanafilExplainPage, validateEdMedsAvanafilExplain };
