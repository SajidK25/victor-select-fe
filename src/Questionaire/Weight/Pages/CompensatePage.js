import React from "react";
import { RadioPage } from "../../../_components/RadioPage";

const options = [
  {
    id: "yes",
    label: "Yes",
  },
  {
    id: "no",
    label: "No",
  },
];

const validateCompensate = (values) => {
  const errors = { compensate: {} };

  if (!values.compensate.answer) {
    errors.compensate.answer = "Please select an option.";
  }

  return errors;
};

const questionText = `Do you compensate for overeating by fasting, 
                      using laxatives, vomiting, or exercising?`;
const additionalText = "";

let CompensatePage = (props) => {
  return (
    <RadioPage
      name="compensate.answer"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { CompensatePage, validateCompensate };
