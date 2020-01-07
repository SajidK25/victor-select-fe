import React from "react";
import { Field } from "react-final-form";
import FormGroup from "@material-ui/core/FormGroup";
import {
  StandardPage,
  RadioInline,
  FieldContainer
} from "../../../_components";

const validateSeenPhysician = values => {
  const errors = { treatment: {} };

  // if (!values.shots.answer) {
  //   errors.shots.answer = "Please indicate if you've had shots.";
  // } else if (values.shots.answer === "Yes") {
  //   if (!values.shots.helpful) {
  //     errors.shots.helpful = "Please make a selection";
  //   }
  //   if (!values.shots.reactions) {
  //     errors.shots.reactions = "Please make a selection";
  //   }
  // }

  return errors;
};

const questionText = `Prior Treatment`;
const additionalText = ``;

const SeenPhysicianPage = props => {
  const { values } = props;
  console.log("Values:", values);
  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    >
      <FormGroup>
        <FieldContainer>
          <Field
            name="treatment.answer"
            component={RadioInline}
            label=" Have you ever seen a physician or psychologist for this problem?"
            options={["Yes", "No"]}
          />

          {values.treatment.answer === "Yes" ? (
            <div>
              <Field
                name="treatment.diagnosos"
                component={RadioInline}
                label="What was your diagnosis?"
                options={[
                  "Depression",
                  "Spectrum Disorder",
                  "Personality Disorder",
                  "Bipolar Disorder",
                  "Anxiety Disorder",
                  "Other"
                ]}
              />
            </div>
          ) : null}
        </FieldContainer>
      </FormGroup>
    </StandardPage>
  );
};

export { SeenPhysicianPage, validateSeenPhysician };
