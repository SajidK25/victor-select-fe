import React from "react";
import { NeverToHighPage } from "../../_components/NeverToHighPage";

const options = [
  {
    name: "sleepDozing.reading",
    label: "Sitting and reading."
  },
  {
    name: "sleepDozing.watchingTV",
    label: "Watching television."
  },
  {
    name: "sleepDozing.sitting",
    label: "Sitting."
  },
  {
    name: "sleepDozing.publicPlace",
    label: "Inactive in a public place (e.g. a theater or meeting)."
  },
  {
    name: "sleepDozing.passenger",
    label: "As a passenger in a car from an hour without a break."
  },
  {
    name: "sleepDozing.lyingDown",
    label: "Lying down to rest in the afternoon when circumstances permit."
  },
  {
    name: "sleepDozing.talking",
    label: "Sitting and talking to someone."
  },
  {
    name: "sleepDozing.afterLunch",
    label: "Sitting quietly after a lunch without alcohol."
  }
];

const validateSleepDozing = values => {
  const errors = { sleepDozing: {} };

  return errors;
};

const questionText = `What is the likelyhood of you dozing off or falling asleep in the 
  following situations, in contrast to feeling just tired? `;
const additionalText = `This refers to your usual way of life in recent times - 
  even if you have not done some of these things recently. 
  Use the following scale to choose the most appropriate number for each situation.
  `;

const SleepDozingPage = props => {
  return (
    <NeverToHighPage
      questionText={questionText}
      additionalText={additionalText}
      options={options}
      {...props}
    />
  );
};

export { SleepDozingPage, validateSleepDozing };
