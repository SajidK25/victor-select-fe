import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { CheckboxPage } from "../../../_components";
import { optionsAllFalse } from "../../../_helpers";
import { GET_SLEEP_TYPE } from "../../Sleep/sleepSelections";

const stdDWarning = `This medication may potentially interact with Doxepin, but is not contraindicated.
    Please consult with your physician prior to taking these medications together.`;

const stdTWarning = `This medication may potentially interact with Trazadone.
      Please consult with your physician prior to taking these medications together.`;

var options = [];

const setOptions = sleepType => {
  if (sleepType === "D") {
    options = [
      {
        name: "otherMeds.hydrocodone",
        label: "Hydrocodone",
        warning: stdDWarning
      },
      {
        name: "otherMeds.bupropion",
        label: "Bupropion (Wellbutrin)",
        warning: stdDWarning
      },
      {
        name: "otherMeds.cimetidine",
        label: "Cimetidine (Tagamet)",
        warning: stdDWarning
      },
      {
        name: "otherMeds.stJohnsWort",
        label: "St. John's Wort (Hipericum perforatum)",
        warning: stdDWarning
      },
      {
        name: "otherMeds.terbinafine",
        label: "Terbinafine (Lamisil)",
        warning: stdDWarning
      },
      {
        name: "otherMeds.tolazamide",
        label: "Tolazamide (Tolinase)",
        warning: stdDWarning
      },
      {
        name: "otherMeds.antiDepressants",
        label:
          "Antidepressants or other medication used to treat mental illness",
        explain: "otherMeds.antiDepressantsExplain",
        explainText: "Please list all here.",
        warning: stdDWarning
      },
      {
        name: "otherMeds.heartMeds",
        label: "Heart Rhythm Medications",
        explain: "otherMeds.heartMedsExplain",
        explainText: "Please list all here.",
        warning: stdDWarning
      }
    ];
  } else {
    options = [
      {
        name: "otherMeds.mesoridazine",
        label: "Mesoridazine-(QT Interval Prolonging Drugs)",
        warning: stdTWarning
      },
      {
        name: "otherMeds.ketoconazole",
        label: "Ketoconazole",
        warning: stdTWarning
      },
      {
        name: "otherMeds.safinamide",
        label: "Safinamide",
        warning: stdTWarning
      }
    ];
  }
};

const validateSleepOtherMedications = values => {
  const errors = { otherMeds: {} };
  const o = values.otherMeds;

  if (optionsAllFalse(options, values) && !o.none) {
    errors.checkError = "Please select an option";
  }

  return errors;
};

const additionalText = "Select all that apply";

const noOptionField = "otherMeds.none";
const noOptionText = "None of these apply";

const SleepOtherMedicationsPage = props => {
  const { data } = useQuery(GET_SLEEP_TYPE);
  setOptions(data.sleepType);
  const questionText = `Please indicate if you are currently taking  
  any of the following medications that may interact with 
  ${data.sleepType === "D" ? "Doxepine" : "Trazadone"}`;

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

export { SleepOtherMedicationsPage, validateSleepOtherMedications };
