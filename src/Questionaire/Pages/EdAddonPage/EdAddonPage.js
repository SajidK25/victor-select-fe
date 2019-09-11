/* eslint-disable import/order */
import React from "react";
import { Field } from "react-final-form";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {
  StandardPage,
  DetailedRadioGroup,
  RadioSubmit
} from "../../../_components";
import { getAddonList } from "../../../_constants";
import { EdAddonDisplay } from "./EdAddonDisplay";

const useStyles = makeStyles(theme => ({
  moreText: {
    marginBottom: theme.spacing(2)
  },
  highlite: {
    fontWeight: 500,
    color: theme.palette.primary.main
  }
}));

const validateEdAddon = values => {
  const errors = { subscription: {} };

  if (!values.subscription.addOn) {
    errors.subscription.addOn = "Please make a selection.";
  }

  return errors;
};

const questionText = "Do you want to enhance your results?";

const EdAddonPage = props => {
  const { handleSubmit } = props;
  const classes = useStyles();
  const name = "subscription.addOn";
  let options = [];

  options = getAddonList();

  console.log("Addon Options", options);
  return (
    <StandardPage questionText={questionText} {...props}>
      <Typography variant="body2" paragraph>
        <span className={classes.highlite}>Male Daily</span> is a collection of
        supplements designed to improve testosterone levels thereby enhancing
        erectile performance. Adding this option can supercharge the results of
        our prescriptive products making this one of the best possible
        combinations to achieve your ultimate desired results. Male Daily can
        also be taken alone, however, it will not yield the same amazing results
        as taking it in conjunction with our customized medications.
      </Typography>
      {options && (
        <Field
          component={DetailedRadioGroup}
          options={options}
          displayComponent={EdAddonDisplay}
          name={name}
          type="div"
        />
      )}
      <RadioSubmit name={name} handleSubmit={handleSubmit} />
    </StandardPage>
  );
};

export { EdAddonPage, validateEdAddon };
