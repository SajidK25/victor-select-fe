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
import { getAddonList } from "../../../Sleep/sleepSelections";
import { AddonDisplay } from "./AddonDisplay";

const useStyles = makeStyles(theme => ({
  moreText: {
    marginBottom: theme.spacing(2)
  },
  highlite: {
    fontWeight: 500,
    color: theme.palette.primary.main
  }
}));

const validateAddon = values => {
  const errors = { subscription: {} };

  if (!values.subscription.addOn) {
    errors.subscription.addOn = "Please make a selection.";
  }

  return errors;
};

const questionText = "Do you want to enhance your results?";

const AddonPage = props => {
  const { handleSubmit } = props;
  const classes = useStyles();
  const name = "subscription.addOn";
  let options = [];

  options = getAddonList();

  console.log("Addon Options", options);
  return (
    <StandardPage questionText={questionText} {...props}>
      <Typography variant="body2" paragraph>
        <span className={classes.highlite}>?Sleep Addon?</span> is a collection
        of supplements designed to improve sleep...
      </Typography>
      {options && (
        <Field
          component={DetailedRadioGroup}
          options={options}
          displayComponent={AddonDisplay}
          name={name}
          type="div"
        />
      )}
      <RadioSubmit name={name} handleSubmit={handleSubmit} />
    </StandardPage>
  );
};

export { AddonPage, validateAddon };
