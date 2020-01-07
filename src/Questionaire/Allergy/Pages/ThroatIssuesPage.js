import React from "react";
import { CheckboxPage } from "./_components/CheckboxPage";
import { optionsAllFalse } from "../../../_helpers";
import { CheckboxWithOptions, RadioInline } from "../../../_components";
import {
  frequencyLabel,
  frequencyOptions,
  occursLabel,
  occursOptions
} from "./_constants";

const options = [
  {
    name: "throatSore.selected",
    label: "Sore",
    options: [
      {
        name: "throatSore.frequency",
        component: RadioInline,
        label: frequencyLabel,
        options: frequencyOptions
      },
      {
        name: "throatSore.occurs",
        component: RadioInline,
        label: occursLabel,
        options: occursOptions
      }
    ]
  },
  {
    name: "throatCough.selected",
    label: "Chronic Cough",
    options: [
      {
        name: "throatCough.frequency",
        component: RadioInline,
        label: frequencyLabel,
        options: frequencyOptions
      },
      {
        name: "throatCough.occurs",
        component: RadioInline,
        label: occursLabel,
        options: occursOptions
      }
    ]
  },
  {
    name: "throatItchy.selected",
    label: "Itchy Throat/Palate",
    options: [
      {
        name: "throatItchy.frequency",
        component: RadioInline,
        label: frequencyLabel,
        options: frequencyOptions
      },
      {
        name: "throatItchy.occurs",
        component: RadioInline,
        label: occursLabel,
        options: occursOptions
      }
    ]
  },
  {
    name: "throatClearing.selected",
    label: "Throat Clearing",
    options: [
      {
        name: "throatClearing.frequency",
        component: RadioInline,
        label: frequencyLabel,
        options: frequencyOptions
      },
      {
        name: "throatClearing.occurs",
        component: RadioInline,
        label: occursLabel,
        options: occursOptions
      }
    ]
  },
  {
    name: "throatHoarse.selected",
    label: "Hoarseness",
    options: [
      {
        name: "throatHoarse.frequency",
        component: RadioInline,
        label: frequencyLabel,
        options: frequencyOptions
      },
      {
        name: "throatHoarse.occurs",
        component: RadioInline,
        label: occursLabel,
        options: occursOptions
      }
    ]
  },
  {
    name: "throatPostNasal.selected",
    label: "Post Nasal Drip",
    options: [
      {
        name: "throatPostNasal.frequency",
        component: RadioInline,
        label: frequencyLabel,
        options: frequencyOptions
      },
      {
        name: "throatPostNasal.occurs",
        component: RadioInline,
        label: occursLabel,
        options: occursOptions
      }
    ]
  }
];

const validateThroatIssues = values => {
  const errors = { throatIssues: {} };

  if (optionsAllFalse(options, values) && !values.throatIssues.none) {
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
  "Please indicate all of the conditions you experience with your THROAT.";
const additionalText = "Check all that apply.";

const noOptionField = "throatIssues.none";
const noOptionText = "None of these apply";

const ThroatIssuesPage = props => {
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

export { ThroatIssuesPage, validateThroatIssues };
