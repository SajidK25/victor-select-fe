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
import { getAddonList } from "../../ProductInfo";
import { HairAddonDisplay } from "./HairAddonDisplay";

const useStyles = makeStyles(theme => ({
  moreText: {
    marginBottom: theme.spacing(2)
  },
  highlite: {
    fontWeight: 500,
    color: theme.palette.primary.main
  }
}));

const validateHairAddon = values => {
  const errors = { subscription: {} };

  if (!values.subscription.addOnId) {
    errors.subscription.addOnId = "Please make a selection.";
  }

  return errors;
};

const questionText = "Do you want to enhance your results?";

const HairAddonPage = props => {
  const { handleSubmit } = props;
  const classes = useStyles();
  const name = "subscription.addOnId";
  let options = [];

  options = getAddonList();

  return (
    <StandardPage questionText={questionText} {...props}>
      <Typography variant="body2" paragraph>
        <span className={classes.highlite}>Male Daily</span> is a supplement...
        I think we need some warnings here too...
      </Typography>
      {options && (
        <Field
          component={DetailedRadioGroup}
          options={options}
          displayComponent={HairAddonDisplay}
          name={name}
          type="div"
        />
      )}
      <RadioSubmit name={name} handleSubmit={handleSubmit} />
    </StandardPage>
  );
};

export { HairAddonPage, validateHairAddon };
