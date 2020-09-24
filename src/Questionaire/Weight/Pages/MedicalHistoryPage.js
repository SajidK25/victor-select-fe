import React from "react";
import { CheckboxPage } from "../../../_components";
import { optionsAllFalse } from "../../../_helpers";

const describe = "Please briefly describe";

const options = [
  {
    name: "medicalHistory.hypertension",
    label: "Hypertension",
    explain: "medicalHistory.hypertensionExplain",
    explainText: describe,
  },
  {
    name: "medicalHistory.heartFailure",
    label: "Congestive Heart Failure",
    explain: "medicalHistory.heartFailureExplain",
    explainText: describe,
  },
  {
    name: "medicalHistory.heartAttack",
    label: "Heart Attack",
    explain: "medicalHistory.heartAttackExplain",
    explainText: describe,
  },
  {
    name: "medicalHistory.cardiacArrhythmias",
    label: "Cardiac Arrhythmias",
    explain: "medicalHistory.cardiacArrhythmiasExplain",
    explainText: describe,
  },
  {
    name: "medicalHistory.stroke",
    label: "Stroke",
    explain: "medicalHistory.strokeExplain",
    explainText: describe,
  },
  {
    name: "medicalHistory.thyroidDisease",
    label: "Thyroid Disease",
    explain: "medicalHistory.thyroidDiseaseExplain",
    explainText: describe,
  },
  {
    name: "medicalHistory.lungProblems",
    label: "Lung Problems (e.g. COPD/Asthma)",
    explain: "medicalHistory.lungProblemsExplain",
    explainText: describe,
  },
  {
    name: "medicalHistory.pulmonaryHypertension",
    label: "Pulmonary Hypertension",
    explain: "medicalHistory.pulmonaryHypertensionExplain",
    explainText: describe,
  },
  {
    name: "medicalHistory.diabetes",
    label: "Diabetes",
    explain: "medicalHistory.diabetesExplain",
    explainText: describe,
  },
  {
    name: "medicalHistory.parkinsons",
    label: "Parkinson's",
    explain: "medicalHistory.parkinsonsExplain",
    explainText: describe,
  },
  {
    name: "medicalHistory.anemia",
    label: "Anemia/Iron Deficiency",
    explain: "medicalHistory.anemiaExplain",
    explainText: describe,
  },
  {
    name: "medicalHistory.heartburn",
    label: "Heartburn/Reflux",
    explain: "medicalHistory.heartburnExplain",
    explainText: describe,
  },
  {
    name: "medicalHistory.arthritis",
    label: "Arthritis",
    explain: "medicalHistory.arthritisExplain",
    explainText: describe,
  },
  {
    name: "medicalHistory.sexualDysfunction",
    label: "Sexual Dysfunction/Loss of Libido",
    explain: "medicalHistory.sexualDysfunctionExplain",
    explainText: describe,
  },
  {
    name: "medicalHistory.fibromyalgia",
    label: "Fibromyalgia",
    explain: "medicalHistory.fibromyalgiaExplain",
    explainText: describe,
  },
  {
    name: "medicalHistory.depression",
    label: "Depression/Anxiety",
    explain: "medicalHistory.depressionExplain",
    explainText: describe,
  },
  {
    name: "medicalHistory.seizures",
    label: "Seizures",
    explain: "medicalHistory.seizuresExplain",
    explainText: describe,
  },
  {
    name: "medicalHistory.menopause",
    label: "Menopause",
    explain: "medicalHistory.menopauseExplain",
    explainText: describe,
  },
  {
    name: "medicalHistory.bloodDonations",
    label: "Frequent Blood Donations",
    explain: "medicalHistory.bloodDonationsExplain",
    explainText: describe,
  },
  {
    name: "medicalHistory.lupus",
    label: "Connective Tissue Disease (e.g. Scleroderma)",
    explain: "medicalHistory.lupusExplain",
    explainText: describe,
  },
  {
    name: "medicalHistory.cancer",
    label: "Cancer",
    explain: "medicalHistory.cancerExplain",
    explainText: describe,
  },
  {
    name: "medicalHistory.congestion",
    label: "Nasal Allergies/Congestion",
    explain: "medicalHistory.congestionExplain",
    explainText: describe,
  },
  {
    name: "medicalHistory.kidneyDisease",
    label: "End Stage Kidney Disease/Dialysis",
    explain: "medicalHistory.kidneyDiseaseExplain",
    explainText: describe,
  },
];

const validateMedicalHistory = (values) => {
  const errors = {
    medicalHistory: {},
    checkError: "",
  };

  const m = values.medicalHistory;
  const details = "Please provide details";

  if (optionsAllFalse(options, values) && !m.none) {
    errors.checkError = "Please select an option";
  }

  options.forEach((o) => {
    if (o.explain) {
      const n = o.name.split(".");
      const e = o.explain.split(".");
      if (values[n[0]][n[1]] && !values[e[0]][e[1]]) {
        errors[e[0]][e[1]] = details;
      }
    }
  });

  return errors;
};

const questionText = "Please check the appropriate box if you have a history of any of the following";
const additionalText = "Check all that apply.";

const noOptionField = "medicalHistory.none";
const noOptionText = "None of these apply";

const MedicalHistoryPage = (props) => {
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

export { MedicalHistoryPage, validateMedicalHistory };
