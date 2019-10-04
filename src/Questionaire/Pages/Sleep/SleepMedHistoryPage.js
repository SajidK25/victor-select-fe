import React from "react";
import { CheckboxPage } from "../../../_components";
import { optionsAllFalse } from "../../../_helpers";

const describe = "Please briefly describe";

const options = [
  {
    name: "sleepMedHistory.hypertension",
    label: "Hypertension",
    explain: "sleepMedHistory.hypertensionExplain",
    explainText: describe
  },
  {
    name: "sleepMedHistory.heartFailure",
    label: "Congestive Heart Failure",
    explain: "sleepMedHistory.heartFailureExplain",
    explainText: describe
  },
  {
    name: "sleepMedHistory.heartAttack",
    label: "Heart Attack",
    explain: "sleepMedHistory.heartAttackExplain",
    explainText: describe
  },
  {
    name: "sleepMedHistory.cardiacArrhythmias",
    label: "Cardiac Arrhythmias",
    explain: "sleepMedHistory.cardiacArrhythmiasExplain",
    explainText: describe
  },
  {
    name: "sleepMedHistory.stroke",
    label: "Stroke",
    explain: "sleepMedHistory.strokeExplain",
    explainText: describe
  },
  {
    name: "sleepMedHistory.thyroidDisease",
    label: "Thyroid Disease",
    explain: "sleepMedHistory.thyroidDiseaseExplain",
    explainText: describe
  },
  {
    name: "sleepMedHistory.lungProblems",
    label: "Lung Problems (e.g. COPD/Asthma)",
    explain: "sleepMedHistory.lungProblemsExplain",
    explainText: describe
  },
  {
    name: "sleepMedHistory.pulmonaryHypertension",
    label: "Pulmonary Hypertension",
    explain: "sleepMedHistory.pulmonaryHypertensionExplain",
    explainText: describe
  },
  {
    name: "sleepMedHistory.diabetes",
    label: "Diabetes",
    explain: "sleepMedHistory.diabetesExplain",
    explainText: describe
  },
  {
    name: "sleepMedHistory.parkinsons",
    label: "Parkinson's",
    explain: "sleepMedHistory.parkinsonsExplain",
    explainText: describe
  },
  {
    name: "sleepMedHistory.anemia",
    label: "Anemia/Iron Deficiency",
    explain: "sleepMedHistory.anemiaExplain",
    explainText: describe
  },
  {
    name: "sleepMedHistory.heartburn",
    label: "Heartburn/Reflux",
    explain: "sleepMedHistory.heartburnExplain",
    explainText: describe
  },
  {
    name: "sleepMedHistory.arthritis",
    label: "Arthritis",
    explain: "sleepMedHistory.arthritisExplain",
    explainText: describe
  },
  {
    name: "sleepMedHistory.sexualDysfunction",
    label: "Sexual Dysfunction/Loss of Libido",
    explain: "sleepMedHistory.sexualDysfunctionExplain",
    explainText: describe
  },
  {
    name: "sleepMedHistory.fibromyalgia",
    label: "Fibromyalgia",
    explain: "sleepMedHistory.fibromyalgiaExplain",
    explainText: describe
  },
  {
    name: "sleepMedHistory.depression",
    label: "Depression/Anxiety",
    explain: "sleepMedHistory.depressionExplain",
    explainText: describe
  },
  {
    name: "sleepMedHistory.seizures",
    label: "Seizures",
    explain: "sleepMedHistory.seizuresExplain",
    explainText: describe
  },
  {
    name: "sleepMedHistory.menopause",
    label: "Menopause",
    explain: "sleepMedHistory.menopauseExplain",
    explainText: describe
  },
  {
    name: "sleepMedHistory.bloodDonations",
    label: "Frequent Blood Donations",
    explain: "sleepMedHistory.bloodDonationsExplain",
    explainText: describe
  },
  {
    name: "sleepMedHistory.lupus",
    label: "Connective Tissue Disease (e.g. Scleroderma)",
    explain: "sleepMedHistory.lupusExplain",
    explainText: describe
  },
  {
    name: "sleepMedHistory.cancer",
    label: "Cancer",
    explain: "sleepMedHistory.cancerExplain",
    explainText: describe
  },
  {
    name: "sleepMedHistory.congestion",
    label: "Nasal Allergies/Congestion",
    explain: "sleepMedHistory.congestionExplain",
    explainText: describe
  },
  {
    name: "sleepMedHistory.kidneyDisease",
    label: "End Stage Kidney Disease/Dialysis",
    explain: "sleepMedHistory.kidneyDiseaseExplain",
    explainText: describe
  }
];

const validateSleepMedHistory = values => {
  const errors = { sleepMedHistory: {} };
  const s = values.sleepMedHistory;

  if (optionsAllFalse(options, values) && !s.none) {
    errors.checkError = "Please select an option";
  }

  return errors;
};

const questionText =
  "Please check the appropriate box if you have a history of any of the following";
const additionalText = "Check all that apply.";

const noOptionField = "sleepMedHistory.none";
const noOptionText = "None of these apply";

const SleepMedHistoryPage = props => {
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

export { SleepMedHistoryPage, validateSleepMedHistory };
