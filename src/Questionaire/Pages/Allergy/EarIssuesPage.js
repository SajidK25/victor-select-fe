import React from "react";
import { CheckboxPage } from "./_components/CheckboxPage";
import { optionsAllFalse } from "../../../_helpers";
import { CheckboxWithOptions, RadioInline } from "../../../_components";
import {
  sideLabel,
  sideOptions,
  frequencyLabel,
  frequencyOptions,
  occursLabel,
  occursOptions
} from "./_constants";

const options = [
  {
    name: "earClogged.selected",
    label: "Clogged",
    options: [
      {
        name: "earClogged.side",
        component: RadioInline,
        label: sideLabel,
        options: sideOptions
      },
      {
        name: "earClogged.frequency",
        component: RadioInline,
        label: frequencyLabel,
        options: frequencyOptions
      },
      {
        name: "earClogged.occurs",
        component: RadioInline,
        label: occursLabel,
        options: occursOptions
      }
    ]
  },
  {
    name: "earItchy.selected",
    label: "Itchy",
    options: [
      {
        name: "earItchy.side",
        component: RadioInline,
        label: sideLabel,
        options: sideOptions
      },
      {
        name: "earItchy.frequency",
        component: RadioInline,
        label: frequencyLabel,
        options: frequencyOptions
      },
      {
        name: "earItchy.occurs",
        component: RadioInline,
        label: occursLabel,
        options: occursOptions
      }
    ]
  },
  {
    name: "earRinging.selected",
    label: "Ringing",
    options: [
      {
        name: "earRinging.frequency",
        component: RadioInline,
        label: frequencyLabel,
        options: frequencyOptions
      },
      {
        name: "earRinging.side",
        component: RadioInline,
        label: sideLabel,
        options: sideOptions
      }
    ]
  },
  {
    name: "earHearingLoss.selected",
    label: "Hearing Loss",
    options: [
      {
        name: "earHearingLoss.side",
        component: RadioInline,
        label: sideLabel,
        options: sideOptions
      },
      {
        name: "earHearingLoss.frequency",
        component: RadioInline,
        label: frequencyLabel,
        options: frequencyOptions
      }
    ]
  }
];

const validateEarIssues = values => {
  const errors = { eyeIssues: {} };

  if (optionsAllFalse(options, values) && !values.earIssues.none) {
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
  "Please indicate all of the conditions you experience with your EARS.";
const additionalText = "Check all that apply.";

const noOptionField = "earIssues.none";
const noOptionText = "None of these apply";

const EarIssuesPage = props => {
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

export { EarIssuesPage, validateEarIssues };
