import React from "react";
import { OptionsPage } from "./_components/OptionsPage";
import { optionsAllFalse } from "../../../_helpers";
import {
  CheckboxWithOptions,
  RadioWithOptions,
  CheckboxInline,
  RadioInline
} from "../../../_components";

const options = [
  {
    name: "mold.selected",
    label: "My home has a mold or mildew problem",
    options: [
      {
        name: "mold.problem",
        component: RadioInline,
        label: "Type of problem",
        options: ["Major Problem", "Minor Problem"]
      },
      {
        name: "mold.where",
        component: CheckboxInline,
        label: "Where is it?",
        options: ["Bathroom", "Basement", "Kitchen", "Window Sills", "Other"]
      }
    ]
  }
];

const validateDustAndMold = values => {
  const errors = {};

  if (!values.mold.selected) {
    errors.mold = { selected: "Please choose an option." };
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

const questionText = "Tell us more about your environment.";
const additionalText = "";

const DustAndMoldPage = props => {
  return (
    <OptionsPage
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      component={RadioWithOptions}
      {...props}
    />
  );
};

export { DustAndMoldPage, validateDustAndMold };
