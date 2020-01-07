import React from "react";
import { Field } from "react-final-form";
import FormGroup from "@material-ui/core/FormGroup";
import { StandardPage } from "../../../../_components";
import { RelativeSelect } from "./RelativeSelect";

const options = [
  {
    name: "sleepFamily.snoring",
    label: "Snoring or Sleep apnea"
  },
  {
    name: "sleepFamily.narcolepsy",
    label: "Narcolepsy"
  },
  {
    name: "sleepFamily.seizures",
    label: "Seizure disorder"
  },
  {
    name: "sleepFamily.depression",
    label: "Depression"
  },
  {
    name: "sleepFamily.hypertension",
    label: "Hypertension"
  },
  {
    name: "sleepFamily.stroke",
    label: "Stroke"
  },
  {
    name: "sleepFamily.diabetes",
    label: "Diabetes"
  }
];

const validateSleepFamily = values => {
  const errors = { sleepFamily: {} };

  return errors;
};

const questionText = `Does any member of your family have any of the following?`;
const additionalText = `Please indicate.`;

const SleepFamilyPage = props => {
  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    >
      <FormGroup>
        {options.map(o => (
          <Field
            name={o.name}
            key={o.name}
            component={RelativeSelect}
            label={o.label}
          />
        ))}
      </FormGroup>
    </StandardPage>
  );
};

export { SleepFamilyPage, validateSleepFamily };
