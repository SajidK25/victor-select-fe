import React from "react";
import { CheckboxPage } from "../../../_components";
import { optionsAllFalse } from "../../../_helpers";

const options = [
  {
    name: "hypertensionMeds.alphaBlockers",
    label:
      "Any medication called an alpha blocker. They are used high blood pressure or prostate problems. Including Cardura (doxazosin), Coreg (carvedilol), Flomax (tamsulosin), Hytrin (terazosin), Minipress (prazosin), Rapaflo (silodosin), Regitine or Oraverse (phentolamine), Trandate (labetalol), Uraxatral (alfuzosin)"
    //  explain: 'hypertensionMeds.alphaBlockerExplain',
    //  explainText:
    //    'What is the medication, dose, and frequency? How long have you been taking it?'
  },
  {
    name: "hypertensionMeds.sildenafil",
    label: "Sildenafil (Revatio) used to treat pulmonary hypertension",
    warning:
      "If already taking this treatment for hypertension, please consult your cardiologist for proper dosing."
    //  explain: 'hypertensionMeds.sildenafilExplain',
    //  explaintext:
    //    'When were you diagnosed with pulmonary hypertension? How long have you been taking this?'
  },
  {
    name: "hypertensionMeds.riociguat",
    label: "Riociguat (Adempas) used to treat pulmonary hypertension",
    warning:
      "If already taking this treatment for hypertension, please consult your cardiologist for proper dosing."
    //  explain: 'hypertensionMeds.riociguatExplain',
    //  explaintext:
    //    'When were you diagnosed with pulmonary hypertension? How long have you been taking this?'
  }
];

const validateHypertensionMeds = values => {
  const errors = { hypertensionMeds: {} };
  const o = values.hypertensionMeds;

  if (optionsAllFalse(options, values) && !o.none) {
    errors.checkError = "Please select an option";
  }

  if (o.alphaBlockers && !o.alphaBlockersExplain) {
    errors.hypertensionMeds.alphaBlockersExplain = "Please provide details.";
  }
  if (o.sildenafil && !o.sildenafilExplain) {
    errors.hypertensionMeds.sildenafilExplain = "Please provide details.";
  }
  if (o.riociguat && !o.riociguatExplain) {
    errors.hypertensionMeds.riociguatExplain = "Please provide details.";
  }

  return errors;
};

const questionText = `Taking any of the following medications may result in dizziness 
  and/or hypotension (low blood pressure). You should exercise caution 
  when taking these medications in conjunction with ED meds.`;
const additionalText = "Select all that apply";

const noOptionField = "hypertensionMeds.none";
const noOptionText = "None of these apply";

const HypertensionMedsPage = props => {
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

export { HypertensionMedsPage, validateHypertensionMeds };
