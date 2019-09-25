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
} from "../../../_components";
import { getDrugList, GET_SLEEP_TYPE } from "../../../_constants/sleepSelections";
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
  const { data } = useQuery(GET_SLEEP_TYPE);

  const classes = useStyles();
  const name = "subscription.drugId";

  const options = getDrugList(data.sleepType);

  return (
    <StandardPage questionText={questionText} alignTitles="left" {...props}>
      <Typography variant="body2" gutterBottom>
        You have chosen Sleep {data.sleepType}. Now you just need to select our
        Regular or Forte option. While 3 pills constitute a complete dose, we
        recommend starting with 1 pill and increasing to 3 as needed.
      </Typography>
      <Typography variant="body2" className={classes.moreText}>
      If 3 pills of the regular strength is inadequate for you to feel rested,
      we recommend the Forte formula.  Start with 1 pill and increase up to 3 
      for a perfect night’s sleep.
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
