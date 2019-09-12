import React from "react";
// import SvgIcon from "@material-ui/core/SvgIcon"
import { RadioPage } from "../../_components";

const validateHairLossShedding = values => {
  const errors = { hairLoss: {} };

  if (!values.hairLoss.shedding) {
    errors.hairLoss.shedding = "Please make a selection.";
  }

  return errors;
};

const options = [{ id: "yes", label: "Yes" }, { id: "no", label: "No" }];

const questionText = "Are you experiencing shedding?";

const additionalText = `Shedding is defined as having excessive numbers of hairs 
falling out daily. Thinning is defined as having less hair 
to cover the scalp, with or without excessive hairs lost each day. 
Do you feel that you have been shedding excessive numbers of hairs 
(in the shower, on your hair brush, etc)`;

const HairLossSheddingPage = props => {
  return (
    <RadioPage
      name="hairLoss.shedding"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { HairLossSheddingPage, validateHairLossShedding };
