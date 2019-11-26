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
    name: "howOften.goodThings",
    label: "I feel depressed even when good things happen to me.",
    options: howOftenOptions
  },
  {
    name: "howOften.weight",
    label: "Without trying to diet, I have lost, or gained, weight.",
    options: howOftenOptions
  },
  {
    name: "howOften.nervous",
    label:
      "How often have you been bothered by feeling nervous, anxious or on edge?",
    options: howOftenOptions
  },
  {
    name: "howOften.annoyed",
    label:
      "How often have you been bothered by becoming easily annoyed or irritable?",
    options: howOftenOptions
  },
  {
    name: "howOften.afraid",
    label:
      "How often have you been bothered by feeling afraid as if something awful might happen?",
    options: howOftenOptions
  }
];

const validateHowOften3 = values => {
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

const HowOften3Page = props => {
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

export { HowOften3Page, validateHowOften3 };
