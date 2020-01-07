import React from "react";
import { StandardPage } from "../../../_components";

const validateFemaleEd = values => {
  const errors = {};

  return errors;
};

const questionText = "Treatment for Women";
const additionalText =
  "While indicated for the treatment of ED, women can also take these type of medications to potentially enhance arousal with increased lubrication. There is also empirical evidence to suggest women experience enhanced orgasm.";

let FemaleEdPage = props => {
  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      alignTitles="left"
      {...props}
    />
  );
};

export { FemaleEdPage, validateFemaleEd };
