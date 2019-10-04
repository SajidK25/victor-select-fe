import React from "react";
import { reduxForm } from "react-final-form";
import { RadioPage } from "../../../_components/RadioPage";

const options = [
  { id: "yes", label: "I have problems with premature ejaculation." },
  { id: "no", label: "I don't have problems with premature ejaculation" }
];

const validate = values => {
  const errors = {};

  if (!values.premature) {
    errors.premature = "Please select an option.";
  }

  return errors;
};

const questionText = "Do you experience premature ejaculation?";
const additionalText =
  "(Coming before or shortly after penetration can occur in some men. If this is the only problem you have with sex, you should see a doctor in person and not use our service.)";

let PrematurePage = props => {
  return (
    <RadioPage
      name="premature"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

PrematurePage = reduxForm({
  form: "questionaire",
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(PrematurePage);

export { PrematurePage };
