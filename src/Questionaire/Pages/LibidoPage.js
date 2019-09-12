import React from "react";
import { RadioPage } from "../../_components";

const options = [
  { id: "normal", label: "Normal. I think about sex and I want to have sex" },
  {
    id: "less",
    label: "Less than it was because I have problems with having an erection"
  },
  {
    id: "abnormal",
    label: "Abnormal, I don't think about sex or don't want to have sex"
  }
];

const validateLibido = values => {
  const errors = {};

  if (!values.libido) {
    errors.libido = "Please select an option.";
  }

  return errors;
};

const questionText =
  "Which of the following best describes your libido (desire to have sex)?";
const additionalText = "My desire for sex is:";

const LibidoPage = props => {
  return (
    <RadioPage
      name="libido"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { LibidoPage, validateLibido };
