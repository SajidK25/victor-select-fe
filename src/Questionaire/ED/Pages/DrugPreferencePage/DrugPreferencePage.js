import React from "react";
import { Field } from "react-final-form";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {
  StandardPage,
  DetailedRadioGroup,
  RadioSubmit
} from "../../../../_components";
import { getDrugList, validDoseOption, defaultDose } from "../../ProductInfo";
import { DrugPreferenceDisplay } from "./DrugPreferenceDisplay";

const useStyles = makeStyles(theme => ({
  moreText: {
    marginBottom: theme.spacing(2)
  },
  highlite: {
    fontWeight: 500,
    color: theme.palette.primary.main
  }
}));

const validateDrugPreference = values => {
  const errors = { subscription: {} };
  const s = values.subscription;

  if (!values.subscription.drugId) {
    errors.subscription.drugId = "Please make a selection.";
  }

  if (!validDoseOption(s.drugId, s.doseOption)) {
    values.subscription.doseOption = defaultDose(s.drugId);
  }

  return errors;
};

const questionText = "Select Your Product Preference Below";

const DrugPreferencePage = props => {
  const { values, handleSubmit } = props;

  const classes = useStyles();
  const name = "subscription.drugId";
  let options = [];

  const drugType = values.subscription.drugType;
  let extraText = "";
  switch (drugType) {
    case "A": // The Night
      extraText = `Unlike generic Sildenafil, our customized products allow you to eat without diluting the efficacy of the medication.`;
      break;

    case "B": // The weekender
      extraText = `Unlike generic Tadalafil, our customized products allow you to eat without diluting the efficacy of the medication.`;
      break;

    case "C": // Daily
    default:
      extraText =
        "Unlike other products you can eat without diluting the efficacy of the medication.";
  }

  if (drugType) {
    options = getDrugList(drugType);
  }

  return (
    <StandardPage questionText={questionText} alignTitles="left" {...props}>
      <Typography variant="body2" gutterBottom>
        We offer a customized formulation delivered via a unique lozenge which
        dissolves between the cheek and gum for a very fast onset of action and
        absolutely the most potent method of erection possible. {extraText}
      </Typography>
      {drugType === "C" && (
        <Typography variant="body2" gutterBottom>
          <span className={classes.highlite}>Male Daily</span> is a collection
          of supplements designed to improve testosterone levels thereby
          enhancing erectile performance. Male Daily can be taken alone if you
          are seeking a completely non-prescriptive substance. Utilizing this
          option will not be nearly as potent as using in conjunction with one
          of our customized medications.
        </Typography>
      )}
      <Typography variant="body2" className={classes.moreText}>
        The pricing shown is for the recommended starting dose for an average,
        healthy person. We offer discounts for ordering in quantity.
      </Typography>
      {options && (
        <Field
          component={DetailedRadioGroup}
          options={options}
          displayComponent={DrugPreferenceDisplay}
          name={name}
          type="div"
        />
      )}
      <RadioSubmit name={name} handleSubmit={handleSubmit} />
    </StandardPage>
  );
};

export { DrugPreferencePage, validateDrugPreference };
