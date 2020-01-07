/* eslint-disable import/order */
import React from "react";
import { Field } from "react-final-form";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {
  StandardPage,
  DetailedRadioGroup,
  RadioSubmit
} from "../../../../_components";
import { getDrugList } from "../../ProductInfo";
import { HairDrugPreferenceDisplay } from "./HairDrugPreferenceDisplay";

const useStyles = makeStyles(theme => ({
  moreText: {
    marginBottom: theme.spacing(2)
  },
  highlite: {
    fontWeight: 500,
    color: theme.palette.primary.main
  }
}));

const validateHairDrugPreference = values => {
  const errors = { subscription: {} };

  if (!values.subscription.drugId) {
    errors.subscription.drugId = "Please make a selection.";
  }

  return errors;
};

const questionText = "Select Your Product Preference Below";

const HairDrugPreferencePage = props => {
  const { handleSubmit } = props;

  const classes = useStyles();
  const name = "subscription.drugId";

  const options = getDrugList();

  return (
    <StandardPage questionText={questionText} alignTitles="left" {...props}>
      <Typography variant="body2" gutterBottom>
        Our hair loss composition masterfully mixes the two most popular
        medications for hair restoration with uniquely formulated nutraceutical
        blends.
      </Typography>
      <Typography variant="body2" className={classes.moreText}>
        The pricing shown is for the recommended starting dose for an average,
        healthy person. We offer discounts for ordering in quantity.
      </Typography>
      {options && (
        <Field
          component={DetailedRadioGroup}
          options={options}
          displayComponent={HairDrugPreferenceDisplay}
          name={name}
          type="div"
        />
      )}
      <RadioSubmit name={name} handleSubmit={handleSubmit} />
    </StandardPage>
  );
};

export { HairDrugPreferencePage, validateHairDrugPreference };
