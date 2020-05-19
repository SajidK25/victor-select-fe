import React from "react";
import { Field } from "react-final-form";
import Typography from "@material-ui/core/Typography";
import {
  StandardPage,
  DetailedRadioGroup,
  RadioSubmit,
} from "../../../../_components";
import {
  getDrugList,
  validDoseOption,
  defaultDose,
} from "../../../Shared/ProductInfo";
import { WeightDrugPreferenceDisplay } from "./WeightDrugPreferenceDisplay";

const validateWeightDrugPreference = (values) => {
  const newLocal = { subscription: {} };
  const errors = newLocal;
  const s = values.subscription;

  console.log("Subscription", s);

  if (!s.drugId) {
    errors.subscription.drugId = "Please make a selection.";
  }

  if (!validDoseOption(s.drugId, s.doseOption)) {
    values.subscription.doseOption = defaultDose(s.drugId);
  }

  return errors;
};

const questionText = "Select Your Product Preference Below";

const WeightDrugPreferencePage = (props) => {
  const { handleSubmit } = props;

  const name = "subscription.drugId";

  const options = getDrugList();

  return (
    <StandardPage questionText={questionText} alignTitles="left" {...props}>
      {options && (
        <Field
          component={DetailedRadioGroup}
          options={options}
          displayComponent={WeightDrugPreferenceDisplay}
          name={name}
          type="div"
        />
      )}
      <RadioSubmit name={name} handleSubmit={handleSubmit} />
    </StandardPage>
  );
};

export { WeightDrugPreferencePage, validateWeightDrugPreference };
