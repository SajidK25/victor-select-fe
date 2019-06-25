import React from "react";
import { CheckboxPage } from "../../_components";
import { optionsAllFalse } from "../../_helpers";

const options = [
  {
    name: "sleepHealth.legCramps",
    label: "Have leg cramps (Charley horse)"
  },
  {
    name: "sleepHealth.headache",
    label: "Awaken with a headache"
  },
  {
    name: "sleepHealth.urinate",
    label: "Awaken often to urinate during the night"
  },
  {
    name: "sleepHealth.difficultyBreathing",
    label: "Have difficulty breathing while on your back"
  },
  {
    name: "sleepHealth.sweat",
    label: "Sweat excessively during the night"
  },
  {
    name: "sleepHealth.dryMouth",
    label: "Awaken with a dry mouth or sore throat"
  }
];

const validateSleepHealth = values => {
  const errors = { sleepHealth: {} };
  const s = values.sleepHealth;

  if (optionsAllFalse(options, values) && !s.none) {
    errors.checkError = "Please select an option";
  }

  return errors;
};

const questionText =
  "Please indicate if you personally experience any of the following issues.";
const additionalText = "Check all that apply.";

const noOptionField = "sleepHealth.none";
const noOptionText = "None Apply";

const SleepHealthPage = props => {
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

export { SleepHealthPage, validateSleepHealth };
