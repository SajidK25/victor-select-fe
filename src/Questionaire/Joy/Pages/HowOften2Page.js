import React from "react";
import { Field } from "react-final-form";
import FormGroup from "@material-ui/core/FormGroup";
import { StandardPage, RadioInline, FieldContainer } from "../../../_components";
import { howOftenOptions } from "./_constants";

const options = [
  {
    name: "howOften.fatigued",
    label: "How often have you been bothered by feeling fatigued or having little energy?",
    options: howOftenOptions,
  },
  {
    name: "howOften.effort",
    label: "It takes great effort for me to do simple things.",
    options: howOftenOptions,
  },
  {
    name: "howOften.failure",
    label: "I feel like a failure.",
    options: howOftenOptions,
  },
  {
    name: "howOften.sleeping",
    label: "How often have you been bothered by trouble falling, staying asleep, or sleeping too much?",
    options: howOftenOptions,
  },
  {
    name: "howOften.kill",
    label: "I spend time thinking about HOW I might kill myself.",
    options: howOftenOptions,
  },
  {
    name: "howOften.trapped",
    label: "I feel trapped or caught.",
    options: howOftenOptions,
  },
];

const validateHowOften2 = (values) => {
  const errors = { howOften: {} };
  if (!values.howOften.fatigued) {
    errors.howOften.fatigued = "Please make a selection";
  }

  if (!values.howOften.effort) {
    errors.howOften.effort = "Please make a selection";
  }

  if (!values.howOften.failure) {
    errors.howOften.failure = "Please make a selection";
  }

  if (!values.howOften.sleeping) {
    errors.howOften.sleeping = "Please make a selection";
  }

  if (!values.howOften.kill) {
    errors.howOften.kill = "Please make a selection";
  }

  if (!values.howOften.trapped) {
    errors.howOften.trapped = "Please make a selection";
  }

  return errors;
};

const questionText = `Tell us about your situation.`;
const additionalText = ``;

const HowOften2Page = (props) => {
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

export { HowOften2Page, validateHowOften2 };
