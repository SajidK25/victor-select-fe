import React from "react";
import { CheckboxPage } from "../../_components";
import { optionsAllFalse } from "../../_helpers";

const setOptions = values => {
  var options = [];

  if (values.personal.gender === "male") {
    options.push({
      name: "significant.medical",
      label:
        "Medical issues, such as surgery, significant illness, or hospitalization",
      explain: "significant.medicalExplain",
      explainText: "Please list."
    });
  } else {
    options.push({
      name: "significant.medical",
      label:
        "Medical issues, such as the birth of a child, surgery, significant illness, or hospitalization",
      explain: "significant.medicalExplain",
      explainText: "Please list."
    });
  }

  options.push({
    name: "significant.stress",
    label: "Stress, such as divorce, family illness, or work issues",
    explain: "significant.stressExplain",
    explainText: "Please list."
  });

  options.push({
    name: "significant.diet",
    label: "Recent weight loss or change in diet",
    explain: "significant.dietExplain",
    explainText: "Please explain."
  });

  return options;
};

const validateHairSignificant = values => {
  const testOptions = [
    { name: "significant.medical" },
    { name: "significant.stress" },
    { name: "significant.diet" }
  ];
  const errors = { significant: {} };
  const s = values.significant;

  if (optionsAllFalse(testOptions, values) && !values.significant.none) {
    errors.checkError = "Please select an option";
  }
  if (s.medical && !s.medicalExplain) {
    errors.significant.medicalExplain = "Please provide details.";
  }
  if (s.stress && !s.stressExplain) {
    errors.significant.stressExplain = "Please provide details.";
  }
  if (s.diet && !s.dietExplain) {
    errors.significant.dietExplain = "Please provide details.";
  }
  return errors;
};

const questionText = "Have you been experiencing significant life events?";
const additionalText = "Select all that apply to you.";

const noOptionField = "significant.none";
const noOptionText = "None of these apply";

const HairSignificantPage = props => {
  const { values } = props;
  const options = setOptions(values);

  return (
    <CheckboxPage
      options={options}
      noOptionField={noOptionField}
      noOptionText={noOptionText}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { HairSignificantPage, validateHairSignificant };
