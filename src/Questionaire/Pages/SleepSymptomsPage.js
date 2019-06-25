import React from "react";
import { CheckboxPage } from "../../_components";
import { optionsAllFalse } from "../../_helpers";

const options = [
  {
    name: "sleepSymptoms.restlessLegs",
    label: "Restless or kick your legs in your sleep."
  },
  {
    name: "sleepSymptoms.snoring",
    label: "Snore, stop breathing, gasp, snort, or choke in your sleep."
  },
  {
    name: "sleepSymptoms.kicking",
    label: "Kick, punch, or poke your bed partner while asleep.",
    explain: "sleepSymptoms.kickingExplain",
    explainText: "have you ever injured your bed partner or yourself?"
  },
  {
    name: "sleepSymptoms.grindTeeth",
    label: "Grind your teeth."
  }
];

const validateSleepSymptoms = values => {
  const errors = { sleepSymptoms: {} };
  const s = values.sleepSymptoms;

  if (optionsAllFalse(options, values) && !s.none) {
    errors.checkError = "Please select an option";
  }

  if (s.kicking && !s.kickingExplain) {
    errors.sleepSymptoms.kickingExplain = "Please provide details.";
  }

  return errors;
};

const questionText =
  "Please indicate if you have ever been told that you experience any of the following symptoms";
const additionalText = "Check all that apply.";

const noOptionField = "sleepSymptoms.none";
const noOptionText = "None of these apply";

const SleepSymptomsPage = props => {
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

export { SleepSymptomsPage, validateSleepSymptoms };
