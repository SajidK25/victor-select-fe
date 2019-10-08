/* eslint-disable import/order */
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Field } from "react-final-form";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {
  StandardPage,
  DetailedRadioGroup,
  RadioSubmit
} from "../../../../_components";
import { getDrugList } from "../../../Sleep/sleepSelections";
import { SleepDrugPreferenceDisplay } from "./SleepDrugPreferenceDisplay";

const useStyles = makeStyles(theme => ({
  moreText: {
    marginBottom: theme.spacing(2)
  },
  highlite: {
    fontWeight: 500,
    color: theme.palette.primary.main
  }
}));

const validateSleepDrugPreference = values => {
  const errors = { subscription: {} };

  if (!values.subscription.drugId) {
    errors.subscription.drugId = "Please make a selection.";
  }

  return errors;
};

const questionText = "Select Your Product Preference Below";

const SleepDrugPreferencePage = props => {
  const { handleSubmit } = props;

  const classes = useStyles();
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
