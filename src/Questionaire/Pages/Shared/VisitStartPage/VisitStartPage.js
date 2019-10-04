import React from "react";
import { DocImage } from "./DocImage";
import { InfoPage, StandardHeading } from "../../../../_components";

const validateVisitStart = values => {
  const errors = {};

  return errors;
};

const questionText = "Lets Get Started";
const additionalText = `Because the medication you selected contains prescription or compounded drugs, 
                      Victory Select needs to review some medical questions with you to ensure success! 
                      While completing these questions, keep in mind this is saving you the time and 
                      embarrassment of a face to face office visit.`;

const VisitStartPage = props => {
  return (
    <InfoPage {...props}>
      <StandardHeading
        questionText={questionText}
        additionalText={additionalText}
        alignTitles="center"
      />
      <DocImage />
    </InfoPage>
  );
};

export { VisitStartPage, validateVisitStart };
