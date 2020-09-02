import React from "react";
import { Field } from "react-final-form";
import FormGroup from "@material-ui/core/FormGroup";
import { StandardPage, RadioInline, FieldContainer } from "../../../_components";
import { howOftenOptions } from "./_constants";

const options = [
  {
    name: "howOften.down",
    label: "How often have you been bothered by feeling down, depressed, or hopeless?",
    options: howOftenOptions,
  },
  {
    name: "howOften.concentrating",
    label: "How often have you been bothered by trouble concentrating? (reading, working, or completing tasks)",
    options: howOftenOptions,
  },
  {
    name: "howOften.pleasure",
    label: "I have lost interest or pleasure in aspects of life that used to be important to me.",
    options: howOftenOptions,
  },
  {
    name: "howOften.decisions",
    label: "I have difficulty making decisions.",
    options: howOftenOptions,
  },
  {
    name: "howOften.sad",
    label: "How often have you been bothered by feeling sad, blue, and unhappy with yourself.",
    options: howOftenOptions,
  },
  {
    name: "howOften.agitated",
    label: "I am agitated or so restless that it is hard to sit still.",
    options: howOftenOptions,
  },
];

const validateHowOften = (values) => {
  const errors = { howOften: {} };

  if (!values.howOften.down) {
    errors.howOften.down = "Please make a selection.";
  }

  if (!values.howOften.concentrating) {
    errors.howOften.concentrating = "Please make a selection.";
  }

  if (!values.howOften.pleasure) {
    errors.howOften.pleasure = "Please make a selection.";
  }

  if (!values.howOften.decisions) {
    errors.howOften.decisions = "Please make a selection.";
  }

  if (!values.howOften.sad) {
    errors.howOften.sad = "Please make a selection.";
  }

  if (!values.howOften.agitated) {
    errors.howOften.agitated = "Please make a selection.";
  }

  return errors;
};

const questionText = `Tell us about your situation.`;
const additionalText = ``;

const HowOftenPage = (props) => {
  return (
    <StandardPage questionText={questionText} additionalText={additionalText} {...props}>
      <FormGroup>
        {options.map((o) => (
          <FieldContainer key={o.name}>
            <Field name={o.name} key={o.name} component={RadioInline} label={o.label} options={o.options} />
          </FieldContainer>
        ))}
      </FormGroup>
    </StandardPage>
  );
};

export { HowOftenPage, validateHowOften };
