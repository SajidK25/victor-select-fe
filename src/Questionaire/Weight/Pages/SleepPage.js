import React from "react";
import { Field } from "react-final-form";
import FormGroup from "@material-ui/core/FormGroup";
import {
  StandardPage,
  RadioInline,
  FieldContainer,
} from "../../../_components";

const sleep = ["< 6", "6 - 7", "8 - 9", "9+"];

const validateSleep = (values) => {
  const errors = { sleep: {} };

  if (!values.sleep.hours) {
    errors.sleep.hours = "Please select an option.";
  }
  if (!values.sleep.problems) {
    errors.sleep.problems = "Please select an option.";
  }
  if (!values.sleep.rested) {
    errors.sleep.rested = "Please select an option.";
  }
  return errors;
};

const questionText = `Tell us about your your sleep.`;
const additionalText = "";

let SleepPage = (props) => {
  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    >
      <FormGroup>
        <FieldContainer>
          <Field
            name="sleep.hours"
            component={RadioInline}
            label="How many hours of sleep do you get each night?"
            columns={4}
            options={sleep}
          />
          <Field
            name="sleep.problems"
            component={RadioInline}
            columns={4}
            label="Do you have problems falling/staying asleep?"
            options={["Yes", "No"]}
          />
          <Field
            name="sleep.rested"
            component={RadioInline}
            columns={4}
            label="Do you feel rested on most days?"
            options={["Yes", "No"]}
          />
        </FieldContainer>
      </FormGroup>
    </StandardPage>
  );
};

export { SleepPage, validateSleep };
