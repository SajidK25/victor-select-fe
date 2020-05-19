import React from "react";
import { Field } from "react-final-form";
import FormGroup from "@material-ui/core/FormGroup";
import {
  StandardPage,
  RadioInline,
  CheckboxMulti,
  FieldContainer,
} from "../../../_components";

const manage = [
  "Exercise",
  "Relaxation techniques",
  "Hobbies",
  "Prayer",
  "Family relationships",
  "Social relationships",
  "Other",
];

const validateStress = (values) => {
  const errors = { mental: {} };

  if (!values.mental.depressed) {
    errors.mental.depressed = "Please select an option.";
  }
  if (!values.mental.stress) {
    errors.mental.stress = "Please select an option.";
  }

  return errors;
};

const questionText = `Tell us how you're feeling.`;
const additionalText = "";

let StressPage = (props) => {
  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    >
      <FormGroup>
        <FieldContainer>
          <Field
            name="mental.depressed"
            component={RadioInline}
            label="Are you feeling down, depressed, or hopeless?"
            columns={5}
            options={["Yes", "No"]}
          />
          <Field
            name="mental.stress"
            component={RadioInline}
            columns={5}
            label="Rate your current level of stress: not stressed(1) to very (5)"
            options={["1", "2", "3", "4", "5"]}
          />
          <Field
            name="mental.manage"
            component={CheckboxMulti}
            columns={2}
            label="What activities help you manage your stress?"
            options={manage}
          />
        </FieldContainer>
      </FormGroup>
    </StandardPage>
  );
};

export { StressPage, validateStress };
