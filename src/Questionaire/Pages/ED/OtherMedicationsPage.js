import React from "react";
import { CheckboxPage } from "../../../_components";
import { optionsAllFalse } from "../../../_helpers";

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
  }
];

const validateOtherMedications = values => {
  const errors = { otherMeds: {} };
  const o = values.otherMeds;

  if (optionsAllFalse(options, values) && !o.none) {
    errors.checkError = "Please select an option";
  }

  if (!optionsAllFalse(options, values)) {
    errors.checkError = "We are unable to provide this service for you.";
  }

  return errors;
};

const questionText = `Severe injury or even death can result from 
  taking ED medication with any of the following 
  medicines. Please consult your physician prior to using our service.`;
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
