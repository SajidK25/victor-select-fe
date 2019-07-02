import React from "react";
import { CheckboxPage } from "../../_components";
import { optionsAllFalse } from "../../_helpers";

const options = [
  { name: "otherMeds.nitrates", label: "Medicines containing nitrates" },
  {
    name: "otherMeds.nitroglycerin",
    label:
      "Nitroglycerin in any form (tablet, patch, spray or ointment). Names include: Nitro-Dur, Nitrolingual, Nitrostat, Nitromist, Nitrolingual, Nitro-Bid, Transderm-Nitro, Nitro-Time, Deponit, Minitran, Nitrek, Nitrodisc, Nitrogard, Nitroglyn, Nitrol ointment, Nitrong, Nitro-Par"
  },
  {
    name: "otherMeds.isosorbide",
    label:
      "Isosorbide mononitrate or Isosorbide dinitrate. (Dilatrate, Dilatrate–SR, Imdur, Ismo, Isordil, Monoket, Sorbitrate)"
  },
  {
    name: "otherMeds.alphaBlockers",
    label:
      "Any medication called an alpha blocker. They are used high blood pressure or prostate problems. Including Cardura (doxazosin), Coreg (carvedilol), Flomax (tamsulosin), Hytrin (terazosin), Minipress (prazosin), Rapaflo (silodosin), Regitine or Oraverse (phentolamine), Trandate (labetalol), Uraxatral (alfuzosin)",
    explain: "otherMeds.alphaBlockerExplain",
    explainText:
      "What is the medication, dose, and frequency? How long have you been taking it?"
  },
  {
    name: "otherMeds.sildenafil",
    label: "Sildenafil (Revatio) used to treat pulmonary hypertension",
    explain: "otherMeds.sildenafilExplain",
    explaintext:
      "When were you diagnosed with pulmonary hypertension? How long have you been taking this?"
  },
  {
    name: "otherMeds.riociguat",
    label: "Riociguat (Adempas) used to treat pulmonary hypertension",
    explain: "otherMeds.riociguatExplain",
    explaintext:
      "When were you diagnosed with pulmonary hypertension? How long have you been taking this?"
  }
];

const validateOtherMedications = values => {
  const errors = { otherMeds: {} };
  const o = values.otherMeds;

  if (optionsAllFalse(options, values) && !o.none) {
    errors.checkError = "Please select an option";
  }

  if (o.alphaBlockers && !o.alphaBlockersExplain) {
    errors.otherMeds.alphaBlockersExplain = "Please provide details.";
  }
  if (o.sildenafil && !o.sildenafilExplain) {
    errors.otherMeds.sildenafilExplain = "Please provide details.";
  }
  if (o.riociguat && !o.riociguatExplain) {
    errors.otherMeds.riociguatExplain = "Please provide details.";
  }

  return errors;
};

const questionText =
  "Severe injury or even death can result from taking ED medication with any of the following medicines. You should see a doctor in person and not use our service.";
const additionalText = "Select all that apply";

const noOptionField = "otherMeds.none";
const noOptionText = "None of these apply";

const OtherMedicationsPage = props => {
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

export { OtherMedicationsPage, validateOtherMedications };
