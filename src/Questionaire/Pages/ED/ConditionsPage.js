import React from "react";
import { CheckboxPage } from "../../../_components";
import { optionsAllFalse } from "../../../_helpers";

const options = [
  {
    name: "conditions.noSex",
    label: "Any condition where you have been advised not to have sex.",
    explain: "conditions.noSexExplain",
    explainText: "Please provide more detail"
  },
  {
    name: "conditions.kidney",
    label: "Kidney transplant or any other condition affecting your kidney",
    explain: "conditions.kidneyExplain",
    explainText:
      "Please tell us more. What what the diagnosis and are you currently receiving treatment?"
  },
  {
    name: "conditions.liver",
    label: "Liver disease",
    explain: "conditions.liverExplain",
    explainText:
      "Please provide more detail. Specifically, what is the diagnosis and its status? Is it routinely monitored? Please explain your current treatment, any medication, and any other information you think would be important."
  },
  {
    name: "conditions.neurological",
    label:
      "Neurological problems like multiple sclerosis or motor neuron disease",
    explain: "conditions.neurologicalExplain",
    explainText:
      "Please elaborate and indicate any treatment you are receiving."
  },
  {
    name: "conditions.hiv",
    label: "HIV",
    explain: "conditions.hivExplain",
    explainText:
      "Please tell us more about your HIV and current treatment. Do you know your CD4 count? And are you currently taking any medication for HIV? If so, what medications?"
  },
  {
    name: "conditions.spinal",
    label: "Spinal injury or paralysis",
    explain: "conditions.spinalExplain",
    explainText: "​Please provide more detail."
  },
  {
    name: "conditions.pelvis",
    label: "Surgery or radiation on your prostate or pelvis",
    explain: "conditions.pelvisExplain",
    explainText:
      "Please provide details. For what condition did you receive the treatment? What was the procedure? When did it occur? Are you currently receiving any treatment for it?"
  },
  {
    name: "conditions.stomach",
    label: "Stomach, intestinal or bowel ulcers",
    explain: "conditions.stomachExplain",
    explainText:
      "What kind of treatment have you received for this? Have the ulcer(s) healed?"
  }
];

const validateConditions = values => {
  const c = values.conditions;
  const errors = {};

  if (optionsAllFalse(options, values) && !values.conditions.none) {
    errors.checkError = "Please select an option";
  }

  if (c.noSex && !c.noSexExplain) {
    errors.conditions = { noSexExplain: "Please provide details." };
  }
  if (c.kidney && !c.kidneyExplain) {
    errors.conditions = { kidneyExplain: "Please provide details." };
  }
  if (c.liver && !c.liverExplain) {
    errors.conditions = { liverExplain: "Please provide details." };
  }
  if (c.neurological && !c.neurologicalExplain) {
    errors.conditions = { neurologicalExplain: "Please provide details." };
  }
  if (c.hiv && !c.hivExplain) {
    errors.conditions = { hivExplain: "Please provide details." };
  }
  if (c.spinal && !c.spinalExplain) {
    errors.conditions = { spinalExplain: "Please provide details." };
  }
  if (c.pelvis && !c.pelvisExplain) {
    errors.conditions = { pelvisExplain: "Please provide details." };
  }
  if (c.stomach && !c.stomachExplain) {
    errors.conditions = { stomachExplain: "Please provide details." };
  }

  return errors;
};

const questionText =
  "To provide both safe and effective dosages of medication, if appropriate, we need to know if you have, or ever had, any of the following conditions.";
const additionalText = "Check all that apply.";

const noOptionField = "conditions.none";
const noOptionText = "None of these apply";

const ConditionsPage = props => {
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

export { ConditionsPage, validateConditions };
