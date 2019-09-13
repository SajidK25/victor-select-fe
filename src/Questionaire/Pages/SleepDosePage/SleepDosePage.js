/* eslint-disable import/order */
import React from "react";
import { Field } from "react-final-form";
import { SleepDoseDisplay } from "./SleepDoseDisplay";
import {
  StandardPage,
  DetailedRadioGroup,
  RadioSubmit
} from "../../../_components";
import {
  getDoseOptions,
  getDrugName
} from "../../../_constants/sleepSelections";

const validateSleepDose = values => {
  const errors = {};

  return errors;
};

const SleepDosePage = props => {
  const { values, handleSubmit } = props;

  let options = {};
  let drugName = "";

  const drugId = values.subscription.drugId;
  if (drugId) {
    console.log("In Page drugId: ", drugId);
    drugName = getDrugName(drugId);
    options = getDoseOptions(drugId);
  }

  const fieldName = "subscription.doseOption";

  const questionText = `Do you have a preference for ${drugName} dosage?`;
  const additionalText = ``;

  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    >
      <Field
        component={DetailedRadioGroup}
        options={options}
        displayComponent={SleepDoseDisplay}
        name={fieldName}
        type="div"
      />
      <RadioSubmit name={fieldName} handleSubmit={handleSubmit} />
    </StandardPage>
  );
};

export { SleepDosePage, validateSleepDose };
