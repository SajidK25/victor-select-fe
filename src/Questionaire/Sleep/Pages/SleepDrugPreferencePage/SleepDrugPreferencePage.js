/* eslint-disable import/order */
import React from "react";
import { Field } from "react-final-form";
import Typography from "@material-ui/core/Typography";
import {
  StandardPage,
  DetailedRadioGroup,
  RadioSubmit
} from "../../../../_components";
import { getDrugList, validDoseOption, defaultDose } from "../../ProductInfo";
import { SleepDrugPreferenceDisplay } from "./SleepDrugPreferenceDisplay";

const validateSleepDrugPreference = values => {
  const errors = { subscription: {} };
  const s = values.subscription;

  if (!s.drugId) {
    errors.subscription.drugId = "Please make a selection.";
  }

  if (!validDoseOption(s.drugId, s.doseOption)) {
    values.subscription.doseOption = defaultDose(s.drugId);
  }

  return errors;
};

const questionText = "Select Your Product Preference Below";

const SleepDrugPreferencePage = props => {
  const { handleSubmit } = props;

  const name = "subscription.drugId";

  const options = getDrugList();

  return (
    <StandardPage questionText={questionText} alignTitles="left" {...props}>
      <Typography variant="body2" gutterBottom>
        Our customized formulations gently caress you to a restful nights sleep
        while minimizing the side effects of other prescription medications.
      </Typography>

      {options && (
        <Field
          component={DetailedRadioGroup}
          options={options}
          displayComponent={SleepDrugPreferenceDisplay}
          name={name}
          type="div"
        />
      )}
      <RadioSubmit name={name} handleSubmit={handleSubmit} />
    </StandardPage>
  );
};

export { SleepDrugPreferencePage, validateSleepDrugPreference };
