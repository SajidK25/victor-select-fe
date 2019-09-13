import React from "react";
import { CheckboxPage } from "../../_components";
import { optionsAllFalse } from "../../_helpers";

const options = [
  {
    name: "sleepProblems.falling",
    label: "Trouble falling asleep",
    explain: "sleepProblems.fallingExplain",
    explainText:
      "​How long does it take you to fall asleep at night (approx. minutes)"
  },
  {
    name: "sleepProblems.staying",
    label: "Trouble staying asleep"
  },
  {
    name: "sleepProblems.stayingAwake",
    label: "Have difficulty staying awake during the day"
  },
  {
    name: "sleepProblems.nightmares",
    label: "Nightmares or night terrors"
  },
  {
    name: "sleepProblems.unexpected",
    label: "Fallen asleep unexpectedly"
  },
  {
    name: "sleepProblems.accident",
    label:
      "Ever had an accident or near-miss because you have fallen asleep while driving?",
    explain: "sleepProblems.accidentExplain",
    explainText: "​When did this occur?"
  },
  {
    name: "sleepProblems.tooEarly",
    label: "Wake up too early and cannot get back to sleep"
  }
];

const validateSleepProblems = values => {
  const errors = { sleepProblems: {} };
  const s = values.sleepProblems;

  if (optionsAllFalse(options, values) && !s.none) {
    errors.checkError = "Please select an option";
  }

  if (s.falling && !s.fallingExplain) {
    errors.sleepProblems.fallingExplain = "Please provide details.";
  }
  if (s.accident && !s.accidentExplain) {
    errors.sleepProblems.accidentExplain = "Please provide details.";
  }

  return errors;
};

const questionText =
  "Please indicate if you experience any of the following symptoms.";
const additionalText = "Check all that apply.";

const noOptionField = "sleepProblems.none";
const noOptionText = "None Apply";

const SleepProblemsPage = props => {
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

export { SleepProblemsPage, validateSleepProblems };
