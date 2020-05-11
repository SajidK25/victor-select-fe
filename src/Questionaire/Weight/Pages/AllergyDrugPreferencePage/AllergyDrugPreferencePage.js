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
import { AllergyDrugPreferenceDisplay } from "./AllergyDrugPreferenceDisplay";

const validateAllergyDrugPreference = (values) => {
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

const AllergyDrugPreferencePage = (props) => {
  const { handleSubmit } = props;

  const name = "subscription.drugId";

  const options = getDrugList();

  return (
    <StandardPage questionText={questionText} alignTitles="left" {...props}>
      <Typography variant="body2" gutterBottom>
        Our Products help alleviate your suffering from headaches, sneezing,
        drainage, coughing, itching, rashes, and more!
      </Typography>

      {options && (
        <Field
          component={DetailedRadioGroup}
          options={options}
          displayComponent={AllergyDrugPreferenceDisplay}
          name={name}
          type="div"
        />
      )}
      <RadioSubmit name={name} handleSubmit={handleSubmit} />
    </StandardPage>
  );
};

export { AllergyDrugPreferencePage, validateAllergyDrugPreference };
