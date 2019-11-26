import React from "react";
import { CheckboxPage } from "./_components/CheckboxPage";
import { optionsAllFalse } from "../../../_helpers";
import {
  CheckboxWithOptions,
  RadioInline,
  CheckboxInline
} from "../../../_components";
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
    name: "noseCongested.selected",
    label: "Congested",
    options: [
      {
        name: "noseCongested.frequency",
        component: RadioInline,
        label: frequencyLabel,
        options: frequencyOptions
      },
      {
        name: "noseCongested.occurs",
        component: RadioInline,
        label: occursLabel,
        options: occursOptions
      },
      {
        name: "noseCongested.side",
        component: RadioInline,
        label: sideLabel,
        options: sideOptions
      }
    ]
  },
  {
    name: "noseClearMucus.selected",
    label: "Runny - Clear Mucus",
    options: [
      {
        name: "noseClearMucus.frequency",
        component: RadioInline,
        label: frequencyLabel,
        options: frequencyOptions
      },
      {
        name: "noseClearMucus.occurs",
        component: RadioInline,
        label: occursLabel,
        options: occursOptions
      }
    ]
  },
  {
    name: "noseColoredMucus.selected",
    label: "Runny - Colored Mucus",
    options: [
      {
        name: "noseColoredMucus.frequency",
        component: RadioInline,
        label: frequencyLabel,
        options: frequencyOptions
      },
      {
        name: "noseColoredMucus.occurs",
        component: RadioInline,
        label: occursLabel,
        options: occursOptions
      }
    ]
  },
  {
    name: "noseItchy.selected",
    label: "Itchy",
    options: [
      {
        name: "noseItchy.frequency",
        component: RadioInline,
        label: frequencyLabel,
        options: frequencyOptions
      }
    ]
  },
  {
    name: "noseSmell.selected",
    label: "Decreased Smell/Taste",
    options: [
      {
        name: "noseSmell.frequency",
        component: RadioInline,
        label: frequencyLabel,
        options: frequencyOptions
      }
    ]
  },
  {
    name: "noseSnoring.selected",
    label: "Snoring",
    options: [
      {
        name: "noseSnoring.frequency",
        component: RadioInline,
        label: frequencyLabel,
        options: frequencyOptions
      }
    ]
  },
  {
    name: "noseSneezing.selected",
    label: "Exessive Sneezing",
    options: [
      {
        name: "noseSneezing.frequency",
        component: RadioInline,
        label: frequencyLabel,
        options: frequencyOptions
      },
      {
        name: "noseSneezing.occurs",
        component: RadioInline,
        label: occursLabel,
        options: occursOptions
      }
    ]
  }
];

const validateNoseIssues = values => {
  const errors = { noseIssues: {} };

  if (optionsAllFalse(options, values) && !values.noseIssues.none) {
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
  "Please indicate all of the conditions you experience with your NOSE.";
const additionalText = "Check all that apply.";

const noOptionField = "noseIssues.none";
const noOptionText = "None of these apply";

const NoseIssuesPage = props => {
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

export { NoseIssuesPage, validateNoseIssues };
