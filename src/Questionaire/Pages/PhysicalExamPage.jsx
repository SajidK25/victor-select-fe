import React from "react";
import { RadioPage } from "../../_components";

const options = [{ id: "yes", label: "Yes" }, { id: "no", label: "No" }];

const validatePhysicalExam = values => {
  const errors = {};

  if (!values.physicalExam) {
    errors.physicalExam = "Please select an option.";
  } else if (values.physicalExam === "no") {
    errors.physicalExam =
      "Unfortunately we cannot provide this service if you haven't had a physical examination within the last five years.";
  }

  return errors;
};

const questionText =
  "Within the past five years have you had a physical exam by a doctor?";
const additionalText = "";

const PhysicalExamPage = props => {
  return (
    <RadioPage
      name="physicalExam"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { PhysicalExamPage, validatePhysicalExam };
