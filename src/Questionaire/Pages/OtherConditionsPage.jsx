import React from "react";
import { CheckboxPage } from "../../_components";
import { optionsAllFalse } from "../../_helpers";

const options = [
  {
    name: "otherConditions.priapism",
    label: "Priapism (erection lasting longer than 4 hours)",
    explain: "otherConditions.priapismExplain",
    explainText:
      "​Please describe the circumstance and list what treatment you received."
  },
  {
    name: "otherConditions.retinitisPigmentosa",
    label: "Retinitis pigmentosa or Anterior ischemic optic neuropathy (AION)"
  },
  { name: "otherConditions.sickleCell", label: "Sickle cell disease" },
  {
    name: "otherConditions.clotting",
    label:
      "Blood clotting disorder, abnormal bleeding or bruising, or coagulopathy",
    explain: "otherConditions.clottingExplain",
    explainText: "Please provide details"
  },
  { name: "otherConditions.myeloma", label: "Myeloma or leukemia" }
];

const validateOtherConditions = values => {
  const errors = { otherConditions: {} };
  const c = values.otherConditions;

  if (optionsAllFalse(options, values) && !c.none) {
    errors.checkError = "Please select an option";
  }

  if (c.priapism && !c.priapismExplain) {
    errors.otherConditions.priapismExplain = "Please provide details.";
  }
  if (c.clotting && !c.clottingExplain) {
    errors.otherConditions.clottingExplain = "Please provide details.";
  }

  return errors;
};

const questionText =
  "It can be life-threatening to take ED medicines if you now have or have ever had any of the following medical conditions. Instead, you should see a doctor in person and not use our service.";
const additionalText = "Check all that apply.";

const noOptionField = "otherConditions.none";
const noOptionText = "None Apply";

const OtherConditionsPage = props => {
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

export { OtherConditionsPage, validateOtherConditions };
