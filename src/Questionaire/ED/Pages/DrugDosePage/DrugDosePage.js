import React from "react";
import { Field } from "react-final-form";
import { DrugDoseOption } from "./DrugDoseOption";
import {
  StandardPage,
  DetailedRadioGroup,
  RadioSubmit,
} from "../../../../_components";
import { getDoseOptions, getDrugName } from "../../../Shared/ProductInfo";

const validateDrugDose = () => {
  const errors = {};

  return errors;
};

const DrugDosePage = (props) => {
  const { values, handleSubmit } = props;

  let options = {};
  let drugName = "";

  const drugId = values.subscription.drugId;
  if (drugId) {
    drugName = getDrugName(drugId);
    options = getDoseOptions(drugId);
  }

  const fieldName = "subscription.doseOption";

  const questionText = `Do you have a preference for ${drugName} dosage?`;
  const additionalText = `If you have previously used this medication at a dosage and you have had good results you should choose that.`;

  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    >
      <Field
        component={DetailedRadioGroup}
        options={options}
        displayComponent={DrugDoseOption}
        name={fieldName}
        type="div"
      />
      <RadioSubmit name={fieldName} handleSubmit={handleSubmit} />
    </StandardPage>
  );
};

export { DrugDosePage, validateDrugDose };
