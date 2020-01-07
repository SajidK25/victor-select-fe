import React from "react";
import { CheckboxPage } from "./_components/CheckboxPage";
import { optionsAllFalse } from "../../../_helpers";
import { CheckboxWithOptions, RadioInline } from "../../../_components";
import { frequencyLabel, frequencyOptions } from "./_constants";

const options = [
  {
    name: "headAche.selected",
    label: "Frontal Headache",
    options: [
      {
        name: "headAche.frequency",
        component: RadioInline,
        label: frequencyLabel,
        options: frequencyOptions
      }
    ]
  },
  {
    name: "headPressure.selected",
    label: "Facial Pressure",
    options: [
      {
        name: "headPressure.frequency",
        component: RadioInline,
        label: frequencyLabel,
        options: frequencyOptions
      }
    ]
  }
];

const validateHeadIssues = values => {
  const errors = { headIssues: {} };

  if (optionsAllFalse(options, values) && !values.headIssues.none) {
    errors.checkError = "Please select an option";
  }

  //   if (g.scarring && !g.scarringExplain) {
  //     errors.genitalIssues.scarringExplain = "Please provide details.";
  //   }
  //   if (g.curved && !g.curvedExplain) {
  //     errors.genitalIssues.curvedExplain = "Please provide details.";
  //   }
  //   if (g.pain && !g.painExplain) {
  //     errors.genitalIssues.painExplain = "Please provide details.";
  //   }
  //   if (g.tight && !g.tightExplain) {
  //     errors.genitalIssues.tightExplain = "Please provide details.";
  //   }
  return errors;
};

const questionText =
  "Please indicate all of the conditions you experience with your HEAD.";
const additionalText = "Check all that apply.";

const noOptionField = "headIssues.none";
const noOptionText = "None of these apply";

const HeadIssuesPage = props => {
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

export { HeadIssuesPage, validateHeadIssues };
