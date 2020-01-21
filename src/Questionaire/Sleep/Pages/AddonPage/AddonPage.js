/* eslint-disable import/order */
import React from "react";
import { Field } from "react-final-form";
import Typography from "@material-ui/core/Typography";
import {
  StandardPage,
  DetailedRadioGroup,
  RadioSubmit
} from "../../../../_components";
import { getAddonList } from "../../ProductInfo";
import { AddonDisplay } from "./AddonDisplay";

const validateAddon = values => {
  const errors = { subscription: {} };

  if (!values.subscription.addOnId) {
    errors.subscription.addOnId = "Please make a selection.";
  }

  return errors;
};

const questionText = "Do you want to enhance your results?";

const AddonPage = props => {
  const { handleSubmit } = props;
  const name = "subscription.addOnId";
  let options = [];

  options = getAddonList();

  console.log("Addon Options", options);
  return (
    <StandardPage questionText={questionText} {...props}>
      <Typography variant="body2" paragraph>
        Optimize your sleep! Add CBD and take advantage of the relaxing benefits
        to experience your best possible nights sleep!
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
