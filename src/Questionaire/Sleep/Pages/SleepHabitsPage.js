import React from "react";
import { CheckboxPage } from "../../../_components";
import { optionsAllFalse } from "../../../_helpers";

const options = [
  {
    name: "sleepHabits.watchTV",
    label: "Read or watch TV in bed"
  },
  {
    name: "sleepHabits.shareBed",
    label: "Share the bed with anyone"
  },
  {
    name: "sleepHabits.partnerDisorder",
    label: "Partner has a sleep disorder"
  },
  {
    name: "sleepHabits.pets",
    label: "Have pets that sleep in the bedroom"
  },
  {
    name: "sleepHabits.drinkCaffeine",
    label: "Drink caffeinated beverages",
    explain: "sleepHabits.drinkCaffeineExplain",
    explainText: "Hao many cups (8oz) per day?"
  },
  {
    name: "sleepHabits.exercise",
    label: "Exercise regularly (at least 3x/week)"
  }
];

const validateSleepHabits = values => {
  const errors = { sleepHabits: {} };
  const s = values.sleepHabits;

  if (optionsAllFalse(options, values) && !s.none) {
    errors.checkError = "Please select an option";
  }

  if (s.drinkCaffeine && !s.drinkCaffeineExplain) {
    errors.sleepHabits.drinkCaffeineExplain = "Please provide details.";
  }

  return errors;
};

const questionText = "Please indicate which of the following apply to you.";
const additionalText = "Check all that apply.";

const noOptionField = "sleepHabits.none";
const noOptionText = "None Apply";

const SleepHabitsPage = props => {
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

export { SleepHabitsPage, validateSleepHabits };
