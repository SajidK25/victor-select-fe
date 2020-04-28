import React from "react";
import { CheckboxPage } from "./_components/CheckboxPage";
import { optionsAllFalse } from "../../../_helpers";
import { RenderCheckbox } from "../../../_components";

const options = [
  {
    name: "allergyMeds.allegra",
    label: "Allegra",
  },
  {
    name: "allergyMeds.benedryl",
    label: "Benedryl",
  },
  {
    name: "allergyMeds.claritin",
    label: "Claritin",
  },
  {
    name: "allergyMeds.flonase",
    label: "Flonase",
  },
  {
    name: "allergyMeds.phenylephrine",
    label: "Phenylephrine",
  },
  {
    name: "allergyMeds.sudafed",
    label: "Sudafed",
  },
  {
    name: "allergyMeds.zyrtec",
    label: "Zyrtec",
  },
  {
    name: "allergyMeds.other",
    label: "Other",
    explain: "allergyMeds.otherExplain",
    explainText: "What did you you use?",
  },
];

const validateAllergyMedications = (values) => {
  const errors = { allergyMeds: {} };

  if (optionsAllFalse(options, values) && !values.allergyMeds.none) {
    errors.checkError = "Please select an option";
  }

  //   if (g.scarring && !g.scarringExplain) {
  //     errors.genitalIssues.scarringExplain = "Please provide details.";
  //   }
  //   if (g.curved && !g.curvedExplain) {
  //     errors.genitalIssues.curvedExplain = "Please provide details.";
  //   }
  //   if (g.pain && !g.painExplain) {
  //     errors.genitalIssues.painExplain = "Please provide details.";
  //   }
  //   if (g.tight && !g.tightExplain) {
  //     errors.genitalIssues.tightExplain = "Please provide details.";
  //   }
  return errors;
};

const questionText = "What medications relieve your allergy symptoms?";
const additionalText = "Check all that apply.";

const noOptionField = "allergyMeds.none";
const noOptionText = "None of these apply";

const AllergyMedicationsPage = (props) => {
  return (
    <CheckboxPage
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      noOptionField={noOptionField}
      noOptionText={noOptionText}
      component={RenderCheckbox}
      {...props}
    />
  );
};

export { AllergyMedicationsPage, validateAllergyMedications };
