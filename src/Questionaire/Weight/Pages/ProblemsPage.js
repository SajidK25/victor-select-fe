import React from "react";
import { CheckboxPage } from "./_components/CheckboxPage";
import { optionsAllFalse } from "../../../_helpers";
import { RenderCheckbox } from "../../../_components";

const options = [
  {
    name: "problems.earInfections",
    label: "Frequent Ear Infections"
  },
  {
    name: "problems.sinus",
    label: "Sinus Infections"
  },
  {
    name: "problems.brokenNose",
    label: "Broken Nose"
  },
  {
    name: "problems.earTubes",
    label: "Ear Tubes"
  },
  {
    name: "problems.nasalSurgery",
    label: "Nasal/Sinus Surgery"
  },
  {
    name: "problems.nasalPolyps",
    label: "Nasal Polyps"
  },
  {
    name: "problems.deviatedSeptum",
    label: "Deviated Septum"
  }
];

const validateProblems = values => {
  const errors = { problems: {} };

  if (optionsAllFalse(options, values) && !values.problems.none) {
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

const questionText =
  "Have you ever had any of the following problems or procedures?";
const additionalText = "Check all that apply.";

const noOptionField = "problems.none";
const noOptionText = "None of these apply";

const ProblemsPage = props => {
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

export { ProblemsPage, validateProblems };
