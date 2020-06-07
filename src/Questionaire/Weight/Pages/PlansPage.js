import React from "react";
import { CheckboxPage } from "../../../_components";
import { optionsAllFalse } from "../../../_helpers";

const describe = "Describe your results and your length of participation";

const options = [
  {
    name: "plans.weightwatchers",
    label: "Weight Watchers",
    explain: "plans.weightwatchersExplain",
    explainText: describe,
  },
  {
    name: "plans.jennycraig",
    label: "Jenny Craig",
    explain: "plans.jennycraigExplain",
    explainText: describe,
  },
  {
    name: "plans.slimfast",
    label: "Slimfast",
    explain: "plans.slimfastExplain",
    explainText: describe,
  },
  {
    name: "plans.atkins",
    label: "Atkins",
    explain: "plans.atkinsExplain",
    explainText: describe,
  },
  {
    name: "plans.ornish",
    label: "Ornish",
    explain: "plans.ornishExplain",
    explainText: describe,
  },
  {
    name: "plans.southbeach",
    label: "South Beach",
    explain: "plans.southbeachExplain",
    explainText: describe,
  },
  {
    name: "plans.laweightloss",
    label: "LA Weight Loss",
    explain: "plans.laweightlossExplain",
    explainText: describe,
  },
  {
    name: "plans.nutrisystems",
    label: "Nutrisystems",
    explain: "plans.nutrisystemsExplain",
    explainText: describe,
  },
  {
    name: "plans.lindora",
    label: "Lindora",
    explain: "plans.lindoraExplain",
    explainText: describe,
  },
  {
    name: "plans.overeatersanonymous",
    label: "Overeaters Anonymous",
    explain: "plans.overeatersanonymousExplain",
    explainText: describe,
  },
  {
    name: "plans.liquiddiets",
    label: "Liquid Diets (eg. Optifast, Juicing)",
    explain: "plans.liquiddietsExplain",
    explainText: describe,
  },
  {
    name: "plans.meridial",
    label: "Diet Pills: Meridia, Xenical",
    explain: "plans.meridialExplain",
    explainText: describe,
  },
  {
    name: "plans.phenfen",
    label: "Diet Pills: Phen-Fen, Redux",
    explain: "plans.phenfenExplain",
    explainText: describe,
  },
  {
    name: "plans.otcdietpills",
    label: "OTC Diet Pills",
    explain: "plans.otcdietpillsExplain",
    explainText: describe,
  },
  {
    name: "plans.surgery",
    label: "Obesity Surgery",
    explain: "plans.surgeryExplain",
    explainText: describe,
  },
  {
    name: "plans.other",
    label: "Other",
    explain: "plans.otherExplain",
    explainText:
      "Tell us about the plan, your results and your length of participation",
  },
];

const validatePlans = (values) => {
  const errors = { plans: {} };
  const p = values.plans;

  if (optionsAllFalse(options, values) && !p.none) {
    errors.checkError = "Please select an option";
  }

  if (p.weightwatchers && !p.weightwatchersExplain) {
    errors.plans.weightwatchersExplain = "Please provide detais";
  }

  if (p.jennycraig && !p.jennycraigExplain) {
    errors.plans.jennycraigExplain = "Please provide details";
  }

  if (p.slimfast && !p.slimfastExplain) {
    errors.plans.slimfastExplain = "Please provide details";
  }

  if (p.atkins && !p.atkinsExplain) {
    errors.plans.atkinsExplain = "Please provide details";
  }

  if (p.ornish && !p.ornishExplain) {
    errors.plans.ornishExplain = "Please provide details";
  }

  if (p.southbeach && !p.southbeachExplain) {
    errors.plans.southbeachExplain = "Please provide details";
  }

  if (p.laweightloss && !p.laweightlossExplain) {
    errors.plans.laweightlossExplain = "Please provide details";
  }

  if (p.nutrisystems && !p.nutrisystemsExplain) {
    errors.plans.nutrisystemsExplain = "Please provide details";
  }

  if (p.lindora && !p.lindoraExplain) {
    errors.plans.lindoraExplain = "Please provide details";
  }

  if (p.overeatersanonymous && !p.overeatersanonymousExplain) {
    errors.plans.overeatersanonymousExplain = "Please provide details";
  }

  if (p.liquiddiets && !p.liquiddietsExplain) {
    errors.plans.liquiddietsExplain = "Please provide details";
  }

  if (p.meridial && !p.meridialExplain) {
    errors.plans.meridialExplain = "Please provide details";
  }

  if (p.phenfen && !p.phenfenExplain) {
    errors.plans.phenfenExplain = "Please provide details";
  }

  if (p.otcdietpills && !p.otcdietpillsExplain) {
    errors.plans.otcdietpillsExplain = "Please provide details";
  }

  if (p.surgery && !p.surgeryExplain) {
    errors.plans.surgeryExplain = "Please provide details";
  }

  if (p.other && !p.otherExplain) {
    errors.plans.otherExplain = "Please provide details";
  }

  return errors;
};

const questionText = "What weight loss programs have you participated in?";
const additionalText = "Check all that apply.";

const noOptionField = "plans.none";
const noOptionText = "None of these apply";

const PlansPage = (props) => {
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

export { PlansPage, validatePlans };
