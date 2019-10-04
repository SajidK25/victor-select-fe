import React from "react";
// import SvgIcon from "@material-ui/core/SvgIcon"
import { RadioPage } from "../../../_components";

const validateHairLossThinning = values => {
  const errors = { hairLoss: {} };

  if (!values.hairLoss.thinning) {
    errors.hairLoss.thinning = "Please make a selection.";
  }

  return errors;
};

const options = [{ id: "yes", label: "Yes" }, { id: "no", label: "No" }];

const questionText = "Are you experiencing thinning?";

const additionalText = `Do you feel that your scalp hair is slowly 
                        thinning out over the top without losing 
                        excessive numbers of hairs daily?`;

const HairLossThinningPage = props => {
  return (
    <RadioPage
      name="hairLoss.thinning"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { HairLossThinningPage, validateHairLossThinning };
