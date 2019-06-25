import React from "react";
import { CheckboxPage } from "../../_components";
import { optionsAllFalse } from "../../_helpers";

const options = [
  {
    name: "genitalIssues.scarring",
    label:
      "Scarring of the penis. Lumps or bumps under the skin that feel hard",
    explain: "genitalIssues.scarringExplain",
    explainText:
      "Please describe your condition in more detail. Have you seen a physician and if so, what did they say?"
  },
  {
    name: "genitalIssues.curved",
    label:
      "A marked curve or bend in the penis that interferes with sex, or Peyronie's disease",
    explain: "genitalIssues.curvedExplain",
    explainText:
      "Please describe your condition in more detail. Have you seen a physician and if so, what did they say?"
  },
  {
    name: "genitalIssues.pain",
    label: "Pain with erections or with ejaculation",
    explain: "genitalIssues.painExplain",
    explainText: "Can you please explain more?"
  },
  {
    name: "genitalIssues.tight",
    label: "Tight foreskin",
    explain: "genitalIssues.tightExplain",
    explainText:
      "Does this cause pain when you have an erection? Does this interfere with sex? Are you able to pull your foreskin back and forth over the head of your penis? Have you received treatment for this condition? If so, what kind of treatment did you receive? Please explain in more detail."
  }
];

const validateGenitalIssues = values => {
  const g = values.genitalIssues;
  const errors = { genitalIssues: {} };

  if (optionsAllFalse(options, values) && !g.none) {
    errors.checkError = "Please select an option";
  }

  if (g.scarring && !g.scarringExplain) {
    errors.genitalIssues.scarringExplain = "Please provide details.";
  }
  if (g.curved && !g.curvedExplain) {
    errors.genitalIssues.curvedExplain = "Please provide details.";
  }
  if (g.pain && !g.painExplain) {
    errors.genitalIssues.painExplain = "Please provide details.";
  }
  if (g.tight && !g.tightExplain) {
    errors.genitalIssues.tightExplain = "Please provide details.";
  }
  return errors;
};

const questionText =
  "Do you have any of these conditions? Select all that apply to you.";
const additionalText = "Check all that apply.";

const noOptionField = "genitalIssues.none";
const noOptionText = "None of these apply";

const GenitalIssuesPage = props => {
  return (
    <CheckboxPage
      options={options}
      noOptionField={noOptionField}
      noOptionText={noOptionText}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { GenitalIssuesPage, validateGenitalIssues };
