import React from "react";
import { Field } from "react-final-form";
import FormGroup from "@material-ui/core/FormGroup";
import { StandardPage, RadioInline, FieldContainer } from "../../../_components";

const validateSeenPhysician = (values) => {
  const errors = { treatment: {} };
  if (!values.treatment.answer) {
    errors.treatment.answer = "Please make a selection";
  }

  if (!values.treatment.answer === "Yes" && !values.treatment.diagnosis) {
    errors.treatment.diagnosis = "Please make a selection";
  }

  return errors;
};

const questionText = `Prior Treatment`;
const additionalText = ``;

const SeenPhysicianPage = (props) => {
  const { values } = props;
  return (
    <StandardPage questionText={questionText} additionalText={additionalText} {...props}>
      <FormGroup>
        <FieldContainer>
          <Field name="treatment.answer" component={RadioInline} label=" Have you ever seen a physician or psychologist for this problem?" options={["Yes", "No"]} />

          {values.treatment.answer === "Yes" ? (
            <div>
              <Field
                name="treatment.diagnosis"
                component={RadioInline}
                label="What was your diagnosis?"
                options={["Depression", "Spectrum Disorder", "Personality Disorder", "Bipolar Disorder", "Anxiety Disorder", "Other"]}
              />
            </div>
          ) : null}
        </FieldContainer>
      </FormGroup>
    </StandardPage>
  );
};

export { SeenPhysicianPage, validateSeenPhysician };
