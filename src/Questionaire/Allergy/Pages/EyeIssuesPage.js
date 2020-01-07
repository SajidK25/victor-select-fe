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
    name: "eyeWatery.selected",
    label: "Watery",
    options: [
      {
        name: "eyeWatery.side",
        component: RadioInline,
        label: sideLabel,
        options: sideOptions
      },
      {
        name: "eyeWatery.frequency",
        component: RadioInline,
        label: frequencyLabel,
        options: frequencyOptions
      },
      {
        name: "eyeWatery.occurs",
        component: RadioInline,
        label: occursLabel,
        options: occursOptions
      }
    ]
  },
  {
    name: "eyeItchy.selected",
    label: "Itchy",
    options: [
      {
        name: "eyeItchy.side",
        label: sideLabel,
        component: RadioInline,
        options: sideOptions
      },
      {
        name: "eyeItchy.frequency",
        component: RadioInline,
        label: frequencyLabel,
        options: frequencyOptions
      },
      {
        name: "eyeItchy.occurs",
        component: RadioInline,
        label: occursLabel,
        options: occursOptions
      }
    ]
  },
  {
    name: "eyeRed.selected",
    label: "Red",
    options: [
      {
        name: "eyeRed.frequency",
        component: RadioInline,
        label: frequencyLabel,
        options: frequencyOptions
      },
      {
        name: "eyeRed.side",
        component: RadioInline,
        label: sideLabel,
        options: sideOptions
      }
    ]
  },
  {
    name: "eyeDry.selected",
    label: "Dry/Irritated",
    options: [
      {
        name: "eyeDry.side",
        component: RadioInline,
        label: sideLabel,
        options: sideOptions
      },
      {
        name: "eyeDry.frequency",
        component: RadioInline,
        label: frequencyLabel,
        options: frequencyOptions
      },
      {
        name: "eyeDry.occurs",
        component: RadioInline,
        label: occursLabel,
        options: occursOptions
      }
    ]
  },
  {
    name: "eyeSwollen.selected",
    label: "Swollen Lids",
    options: [
      {
        name: "eyeSwollen.side",
        component: RadioInline,
        label: sideLabel,
        options: sideOptions
      },
      {
        name: "eyeSwollen.frequency",
        component: RadioInline,
        label: frequencyLabel,
        options: frequencyOptions
      },
      {
        name: "eyeSwollen.occurs",
        component: RadioInline,
        label: occursLabel,
        options: occursOptions
      }
    ]
  },
  {
    name: "eyeDischarge.selected",
    label: "Itchy",
    options: [
      {
        name: "eyeDischarge.side",
        component: RadioInline,
        label: sideLabel,
        options: sideOptions
      },
      {
        name: "eyeDischarge.frequency",
        component: RadioInline,
        label: frequencyLabel,
        options: frequencyOptions
      },
      {
        name: "eyeDischarge.occurs",
        component: RadioInline,
        label: occursLabel,
        options: occursOptions
      }
    ]
  }
];

const validateEyeIssues = values => {
  const errors = { eyeIssues: {} };

  if (optionsAllFalse(options, values) && !values.eyeIssues.none) {
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
  "Please indicate all of the conditions you experience with your EYES.";
const additionalText = "Check all that apply.";

const noOptionField = "eyeIssues.none";
const noOptionText = "None of these apply";

const EyeIssuesPage = props => {
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

export { EyeIssuesPage, validateEyeIssues };
