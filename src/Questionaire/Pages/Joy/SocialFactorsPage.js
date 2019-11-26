import React from "react";
import { optionsAllFalse } from "../../../_helpers";
import { RenderCheckbox, CheckboxPage } from "../../../_components";

const options = [
  {
    name: "socialFactors.lgbqt",
    label: "Lesbian - Gay - Bisexual - Queer - Transgender"
  },
  {
    name: "socialFactors.alcohol",
    label: "Alcohol or Drug Dependency"
  },
  {
    name: "socialFactors.relationship",
    label: "End of Relationship"
  },
  {
    name: "socialFactors.financial",
    label: "Financial Pressures"
  },
  {
    name: "socialFactors.job",
    label: "Job Change"
  },
  {
    name: "socialFactors.divorce",
    label: "Divorce"
  },
  {
    name: "socialFactors.death",
    label: "Death"
  },
  {
    name: "socialFactors.children",
    label: "Children"
  },
  {
    name: "socialFactors.postpartum",
    label: "Postpartum"
  },
  {
    name: "socialFactors.other",
    label: "Other",
    explain: "socialFactors.otherExplain",
    explainText: "Please provide details"
  }
];

const validateSocialFactors = values => {
  const errors = { socialFactors: {} };

  if (optionsAllFalse(options, values) && !values.socialFactors.none) {
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

const questionText = "Social factors can contribute to depression.";
const additionalText = "Check all that apply.";

const noOptionField = "socialFactors.none";
const noOptionText = "None of these apply";

const SocialFactorsPage = props => {
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

export { SocialFactorsPage, validateSocialFactors };
