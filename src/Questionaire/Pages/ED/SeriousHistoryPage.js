import React from "react";
import { CheckboxPage } from "../../../_components";
import { optionsAllFalse } from "../../../_helpers";

const options = [
  { name: "seriousHistory.lowBP", label: "Severe low blood pressure" },
  {
    name: "seriousHistory.heartAttack",
    label: "Heart attack or heart failure"
  },
  { name: "seriousHistory.stroke", label: "Stroke" },
  { name: "seriousHistory.angina", label: "Angina" },
  {
    name: "seriousHistory.claudation",
    label: "Peripheral vascular disease or claudication",
    explain: "seriousHistory.claudationExplain",
    explainText:
      "Please provide details. Describe your symptoms and any medication you may be taking for this condition."
  },
  {
    name: "seriousHistory.arrhythmia",
    label: "Heart arrhytmia",
    explain: "seriousHistory.arrhythmiaExplain",
    explainText:
      "When was this detected and did you undergo any treatment? Are you undergoing treatment presently? If so, what is the current treatment?"
  },
  {
    name: "seriousHistory.valve",
    label: "Heart valve problems",
    explain: "seriousHistory.valveExplain",
    explainText:
      "Are you currently taking medication or have you had surgery? How severe is your condition?"
  },
  {
    name: "seriousHistory.qtProlongation",
    label: "History of QT prolongation in you or your family",
    explain: "seriousHistory.qtProlongationExplain",
    explainText: "lease provide more specific information."
  },
  {
    name: "seriousHistory.hcm",
    label: "Hypertrophic obstructive cardiomyopathy (HCM)",
    explain: "seriousHistory.hcmExplain",
    explaintext:
      "Has it been diagnosed by a cardiologist? What kind of treatment have you received and what are your current medications?"
  }
];

const validateSeriousHistory = values => {
  const errors = { seriousHistory: {} };

  if (optionsAllFalse(options, values) && !values.seriousHistory.none) {
    errors.checkError = "Please select an option";
  }

  if (
    values.seriousHistory.claudation &&
    !values.seriousHistory.claudationExplain
  ) {
    errors.seriousHistory.claudationExplain = "Please provide details.";
  }
  if (
    values.seriousHistory.arrhythmia &&
    !values.seriousHistory.arrhythmiaExplain
  ) {
    errors.seriousHistory.arrhythmiaExplain = "Please provide details.";
  }

  if (values.seriousHistory.valve && !values.seriousHistory.valveExplain) {
    errors.seriousHistory.valveExplain = "Please provide details.";
  }
  if (
    values.seriousHistory.qtProlongation &&
    !values.seriousHistory.qtProlongationExplain
  ) {
    errors.seriousHistory.qtProlongationExplain = "Please provide details.";
  }
  if (values.seriousHistory.hcm && !values.seriousHistory.hcmExplain) {
    errors.seriousHistory.hcmExplain = "Please provide details.";
  }

  return errors;
};

const questionText =
  "If you have or have had any of the following heart, blood pressure, or cardiovascular problems it can be LIFE-THREATENING to take ED medicines. You should see a doctor in person and not use our service. Select all that apply to you.";
const additionalText = "";

const noOptionField = "seriousHistory.none";
const noOptionText = "None of these apply";

let SeriousHistoryPage = props => {
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

export { SeriousHistoryPage, validateSeriousHistory };
