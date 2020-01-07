import React from "react";
import { optionsAllFalse } from "../../../_helpers";
import { CheckboxPage } from "./_components/CheckboxPage";
import { CheckboxWithOptions, RadioInline } from "../../../_components";

const validateSmoking = values => {
  const errors = {};

  if (optionsAllFalse(options, values) && !values.noPetsOrSmoking) {
    errors.checkError = "Please select an option";
  }

  return errors;
};

const questionText = `Please check all that apply`;
const additionalText = ``;

const options = [
  {
    name: "hasSmoked.selected",
    label: "Have you ever smoked?",
    options: [
      {
        name: "hasSmoked.howMuch",
        component: RadioInline,
        label: "How many packs per day or cigars per day?",
        options: ["One", "Two", "Three", "Four", "Five or more"]
      },
      {
        name: "hasSmoked.hasQuit",
        component: RadioInline,
        label: "Have you quit smoking?",
        options: ["No", "Yes, within 6 months", "Yes, more than 6 months ago"]
      }
    ]
  },
  {
    name: "hasPets.selected",
    label: "Do you have pets or are exposed to pets?"
  }
];

const noOptionField = "noPetsOrSmoking";
const noOptionText = "None of these apply";

const SmokingPage = props => {
  return (
    <CheckboxPage
      options={options}
      noOptionField={noOptionField}
      noOptionText={noOptionText}
      questionText={questionText}
      additionalText={additionalText}
      component={CheckboxWithOptions}
      {...props}
    />
  );
};

export { SmokingPage, validateSmoking };
