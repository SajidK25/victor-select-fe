import React from "react";
import { CheckboxPage } from "../../../_components";
import { optionsAllFalse } from "../../../_helpers";

const options = [
  {
    name: "sleepHistory.sleepStudy",
    label: "Had a sleep study in the past",
    explain: "sleepHistory.sleepStudyExplain",
    explainText: "​Let us know when and where."
  },
  {
    name: "sleepHistory.useCPAP",
    label: "Use CPAP or BiPAP at home",
    explain: "sleepHistory.useCPAPExplain",
    explainText: "​What pressure setting?"
  },
  {
    name: "sleepHistory.tonsilsRemoved",
    label: "Had tonsils or adenoids removed"
  },
  {
    name: "sleepHistory.sinusSurgery",
    label: "Had sinus or nasal surgery"
  },
  {
    name: "sleepHistory.brokenNose",
    label: "Have had a broken nose"
  },
  {
    name: "sleepHistory.headInjury",
    label: "Had any type of head injury"
  },
  {
    name: "sleepHistory.distruptConditions",
    label: "Have any medical conditions that disrupt sleep",
    explain: "sleepHistory.distruptConditionsExplain",
    explainText: "​Please provide details."
  },
  {
    name: "sleepHistory.childProblems",
    label: "Had sleep problems as a child"
  },
  {
    name: "sleepHistory.hadExam",
    label: "Within the past five years had a physical exam by a doctor"
  }
];

const validateSleepHistory = values => {
  const errors = { sleepHistory: {} };
  const s = values.sleepHistory;

  if (optionsAllFalse(options, values) && !s.none) {
    errors.checkError = "Please select an option";
  }

  if (s.sleepStudy && !s.sleepStudyExplain) {
    errors.sleepHistory.sleepStudyExplain = "Please provide details.";
  }

  if (s.useCPAP && !s.useCPAPExplain) {
    errors.sleepHistory.useCPAPExplain = "Please provide details.";
  }

  if (s.disruptConditions && !s.disruptConditionsExplain) {
    errors.sleepHistory.disruptConditionsExplain = "Please provide details.";
  }

  return errors;
};

const questionText =
  "Please indicate if any of these are relevant to your personal medical history.";
const additionalText = "Check all that apply.";

const noOptionField = "sleepHistory.none";
const noOptionText = "None of these apply";

const SleepHistoryPage = props => {
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

export { SleepHistoryPage, validateSleepHistory };
