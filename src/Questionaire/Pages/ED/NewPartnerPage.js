import React from "react";
import { RadioPage } from "../../../_components/RadioPage";

const edBeganChoices = [{ id: "yes", label: "Yes" }, { id: "no", label: "No" }];

const validateNewPartner = values => {
  const errors = {};

  if (!values.newPartner) {
    errors.newPartner = "Please select an option.";
  }

  return errors;
};

const questionText = "Did your ED start with a new partner?";
const additionalText = "";

let NewPartnerPage = props => {
  return (
    <RadioPage
      name="newPartner"
      options={edBeganChoices}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { NewPartnerPage, validateNewPartner };
