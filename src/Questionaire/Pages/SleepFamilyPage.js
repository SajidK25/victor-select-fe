import React from "react";
import { RelativeSelectPage } from "../../_components/RelativeSelectPage";

const options = [
  {
    name: "sleepFamily.snoring",
    label: "Snoring or Sleep apnea"
  },
  {
    name: "sleepFamily.narcolepsy",
    label: "Narcolepsy"
  },
  {
    name: "sleepFamily.seizures",
    label: "Seizure disorder"
  },
  {
    name: "sleepFamily.depression",
    label: "Depression"
  },
  {
    name: "sleepFamily.hypertension",
    label: "Hypertension"
  },
  {
    name: "sleepFamily.stroke",
    label: "Stroke"
  },
  {
    name: "sleepFamily.diabetes",
    label: "Diabetes"
  }
];

const validateSleepFamily = values => {
  const errors = { sleepFamily: {} };
  const s = values.sleepFamily;

  return errors;
};

const questionText = `Does any member of your family have any of the following?`;
const additionalText = `Please indicate.`;

const SleepFamilyPage = props => {
  return (
    <RelativeSelectPage
      questionText={questionText}
      additionalText={additionalText}
      options={options}
      {...props}
    />
  );
};

export { SleepFamilyPage, validateSleepFamily };
