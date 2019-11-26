import React from "react";
import { Field } from "react-final-form";
import FormGroup from "@material-ui/core/FormGroup";
import {
  StandardPage,
  RadioInline,
  FieldContainer
} from "../../../_components";
import { howOftenOptions } from "./_constants";

const options = [
  {
    name: "howOften.down",
    label:
      "How often have you been bothered by feeling down, depressed, or hopeless?",
    options: howOftenOptions
  },
  {
    name: "howOften.concentrating",
    label:
      "How often have you been bothered by trouble concentrating? (reading, working, or completing tasks)",
    options: howOftenOptions
  },
  {
    name: "howOften.pleasure",
    label:
      "I have lost interest or pleasure in aspects of life that used to be important to me.",
    options: howOftenOptions
  },
  {
    name: "howOften.decisions",
    label: "I have difficulty making decisions.",
    options: howOftenOptions
  },
  {
    name: "howOften.sad",
    label:
      "How often have you been bothered by feeling sad, blue, and unhappy with yourself.",
    options: howOftenOptions
  },
  {
    name: "howOften.agitated",
    label: "I am agitated or so restless that it is hard to sit still.",
    options: howOftenOptions
  }
];

const validateHowOften = values => {
  const errors = { howOften: {} };
  //   if (!values.dwelling.location) {
  //     errors.dwelling.location = "Please select a dwelling location";
  //   } else if (
  //     values.dwelling.location === "Other" &&
  //     !values.dwelling.locationother
  //   ) {
  //     errors.dwelling.location = "Other value is required";
  //   }

  //   if (!values.dwelling.type) {
  //     errors.dwelling.type = "Please select a dwelling type";
  //   } else if (values.dwelling.type === "Other" && !values.dwelling.typeother) {
  //     errors.dwelling.type = "Other value is required";
  //   }

  return errors;
};

const questionText = `Tell us about your situation.`;
const additionalText = ``;

const HowOftenPage = props => {
  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    >
      <FormGroup>
        {options.map(o => (
          <FieldContainer key={o.name}>
            <Field
              name={o.name}
              key={o.name}
              component={RadioInline}
              label={o.label}
              options={o.options}
            />
          </FieldContainer>
        ))}
      </FormGroup>
    </StandardPage>
  );
};

export { HowOftenPage, validateHowOften };
