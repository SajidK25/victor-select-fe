import React from "react";
import { EdMedsExplainPage } from "./";

const dosageOptions = [
  { id: "25mg", label: "25mg" },
  { id: "50mg", label: "50mg" },
  { id: "100mg", label: "100mg" },
  { id: "no", label: "I can't remember" }
];

const questionText = "What was the dose of Sildenafil (Viagra)?";

const validateEdMedsViagraExplain = values => {
  const errors = {};
  if (!values.edMeds.viagraDose) {
    errors.edMeds = { viagraDose: "Please choose an option." };
  }
  return errors;
};

const EdMedsViagraExplainPage = props => {
  return (
    <EdMedsExplainPage
      dosageOptions={dosageOptions}
      dosageName="edMeds.viagraDose"
      workedName="edMeds.viagraWorked"
      sideEffectsName="edMeds.viagraSideEffects"
      questionText={questionText}
      {...props}
    />
  );
};

export { EdMedsViagraExplainPage, validateEdMedsViagraExplain };
