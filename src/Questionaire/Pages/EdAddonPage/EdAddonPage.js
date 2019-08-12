/* eslint-disable import/order */
import React from "react";
import { Field } from "react-final-form";
import {
  StandardPage,
  DetailedRadioGroup,
  RadioSubmit
} from "../../../_components";
import { getAddonList } from "../../../_constants";
import { EdAddonDisplay } from "./EdAddonDisplay";

const validateEdAddon = values => {
  const errors = { subscription: {} };

  if (!values.subscription.addOn) {
    errors.subscription.addOn = "Please make a selection.";
  }

  return errors;
};

const questionText = "Do you want to enhance your results?";
const additionalText = "Benefits, benefits, benefits, benefits, more benefits.";

const EdAddonPage = props => {
  const { values, handleSubmit } = props;
  const name = "subscription.addOn";
  let options = {};

  const drugType = values.subscription.drugType;
  if (drugType) {
    options = getAddonList(drugType);
  }
  const howOften = values.subscription.shippingInterval;
  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    >
      <Field
        component={DetailedRadioGroup}
        options={options}
        howOften={howOften}
        displayComponent={EdAddonDisplay}
        name={name}
        type="div"
      />
      <RadioSubmit name={name} handleSubmit={handleSubmit} />
    </StandardPage>
  );
};

export { EdAddonPage, validateEdAddon };
