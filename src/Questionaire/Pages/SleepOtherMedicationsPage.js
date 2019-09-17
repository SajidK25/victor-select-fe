import React from "react";
import { CheckboxPage } from "../../_components";
import { optionsAllFalse } from "../../_helpers";

const stdWarning =
  "We recommend you consult your personal physician if you have concerns.";

const options = [
  { name: "otherMeds.hydrocodone", label: "Hydrocodone", warning: stdWarning },
  {
    name: "otherMeds.bupropion",
    label: "Bupropion (Wellbutrin)",
    warning: stdWarning
  },
  {
    name: "otherMeds.cimetidine",
    label: "Cimetidine (Tagamet)",
    warning: stdWarning
  },
  {
    name: "otherMeds.stJohnsWort",
    label: "St. John's Wort (Hipericum perforatum)",
    warning: stdWarning
  },
  {
    name: "otherMeds.terbinafine",
    label: "Terbinafine (Lamisil)",
    warning: stdWarning
  },
  {
    name: "otherMeds.tolazamide",
    label: "Tolazamide (Tolinase)",
    warning: stdWarning
  },
  {
    name: "otherMeds.antiDepressants",
    label: "Antidepressants or other medication used to treat mental illness",
    explain: "otherMeds.antiDepressantsExplain",
    explainText: "Please list all here.",
    warning: stdWarning
  },
  {
    name: "otherMeds.heartMeds",
    label: "Heart Rhythm Medications",
    explain: "otherMeds.heartMedsExplain",
    explainText: "Please list all here.",
    warning: stdWarning
  }
];

const validateSleepOtherMedications = values => {
  const errors = { otherMeds: {} };
  const o = values.otherMeds;

  if (optionsAllFalse(options, values) && !o.none) {
    errors.checkError = "Please select an option";
  }

  return errors;
};

const questionText = `Please indicate if you are currently taking  
  any of the following medications that may interact with Doxepin.`;
const additionalText = "Select all that apply";

const noOptionField = "otherMeds.none";
const noOptionText = "None of these apply";

const SleepOtherMedicationsPage = props => {
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

export { SleepOtherMedicationsPage, validateSleepOtherMedications };
