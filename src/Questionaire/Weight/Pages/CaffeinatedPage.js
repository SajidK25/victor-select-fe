import React from "react";
import { RadioPage } from "../../../_components/RadioPage";

const options = [
  {
    id: "None",
    label: "None",
  },
  {
    id: "1-3",
    label: "One to three",
  },
  {
    id: "4-6",
    label: "Four to six",
  },
  {
    id: "6+",
    label: "More than six",
  },
];

const validateCaffeinated = (values) => {
  const errors = { caffeinated: {} };

  if (!values.caffeinated.answer) {
    errors.caffeinated.answer = "Please select an option.";
  }

  return errors;
};

const questionText = `How many caffeinated beverages do you consume per day?`;
const additionalText = "";

let CaffeinatedPage = (props) => {
  return (
    <RadioPage
      name="caffeinated.answer"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { CaffeinatedPage, validateCaffeinated };
