import React from "react";
import { RadioPage } from "../../../_components";

const options = [
  {
    id: "yes",
    label:
      "Yes, my blood pressure has been measured within the last six months and I know what it is.",
  },
  {
    id: "no",
    label:
      "I don't know my blood pressure or it's been more than six months since it was last measured.",
    warning:
      "We suggest that you visit your physician's office to discuss taking this medication and have your blood pressure checked.",
  },
];

const validatePreBP = (values) => {
  const errors = {};
  if (!values.bloodPressure.preBP) {
    errors.bloodPressure = { preBP: "Please select an option." };
  }
  return errors;
};

const questionText =
  "It is important that we receive a recent blood pressure reading from you. If you are unsure of your blood pressure please have it checked at your local grocery or drug store.";

const PreBPPage = (props) => {
  {
    return (
      <RadioPage
        name="bloodPressure.preBP"
        options={options}
        questionText={questionText}
        additionalText={""}
        {...props}
      />
    );
  }
};

export { PreBPPage, validatePreBP };
