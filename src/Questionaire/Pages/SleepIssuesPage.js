import React from "react";
import { CheckboxPage } from "../../_components";
import { optionsAllFalse } from "../../_helpers";

const options = [
  {
    name: "sleepIssues.takeSomething",
    label: "Take something to help you sleep",
    explain: "sleepIssues.takeSomethingExplain",
    explainText: "​Please list what you take."
  },
  {
    name: "sleepIssues.alcohol",
    label: "Use alcohol to help you sleep",
    explain: "sleepIssues.alcoholExplain",
    explainText: "​How many drinks per night."
  },
  {
    name: "sleepIssues.sad",
    label: "Feel sad, irritable, or hopeless"
  },
  {
    name: "sleepIssues.nervous",
    label: "Feel nervous or worried"
  },
  {
    name: "sleepIssues.unusualHours",
    label: "Have unusual work hours",
    explain: "sleepIssues.unusualHoursExplain",
    explainText:
      "​Please explain. If you are a shift worker what kind of shift do you work?"
  }
];

const validateSleepIssues = values => {
  const errors = { sleepIssues: {} };
  const s = values.sleepIssues;

  if (optionsAllFalse(options, values) && !s.none) {
    errors.checkError = "Please select an option";
  }

  if (s.takeSomething && !s.takeSomethingExplain) {
    errors.sleepIssues.takeSomethingExplain = "Please provide details.";
  }
  if (s.alcohol && !s.alcoholExplain) {
    errors.sleepIssues.alcoholExplain = "Please provide details.";
  }
  if (s.unusualHours && !s.unusualHoursExplain) {
    errors.sleepIssues.unusualHoursExplain = "Please provide details.";
  }

  return errors;
};

const questionText = "Please indicate which of the following may apply to you.";
const additionalText = "Check all that apply.";

const noOptionField = "sleepIssues.none";
const noOptionText = "None Apply";

const SleepIssuesPage = props => {
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

export { SleepIssuesPage, validateSleepIssues };
