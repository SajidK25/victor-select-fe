/* eslint-disable import/order */
import React from "react";
import { Field } from "react-final-form";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { SleepDoseDisplay } from "./SleepDoseDisplay";
import {
  StandardPage,
  DetailedRadioGroup,
  RadioSubmit
} from "../../../../_components";
import { getDoseOptions, getDrugName } from "../../ProductInfo";

const useStyles = makeStyles(theme => ({
  moreText: {
    marginBottom: theme.spacing(2)
  },
  highlite: {
    fontWeight: 500,
    color: theme.palette.primary.main
  }
}));

const validateSleepDose = values => {
  const errors = {};

  return errors;
};

const SleepDosePage = props => {
  const { values, handleSubmit } = props;
  const classes = useStyles();

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
      <Typography variant="body2" gutterBottom>
        You have chosen {drugName}. Now you just need to select our Regular or
        Forte option. While 3 pills constitute a complete dose, we recommend
        starting with 1 pill and increasing to 3 as needed.
      </Typography>
      <Typography variant="body2" className={classes.moreText}>
        If 3 pills of the regular strength is inadequate for you to feel rested,
        we recommend the Forte formula. Start with 1 pill and increase up to 3
        for a perfect night’s sleep.
      </Typography>
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
