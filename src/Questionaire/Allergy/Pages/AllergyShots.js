import React from "react";
import { Field } from "react-final-form";
import FormGroup from "@material-ui/core/FormGroup";
import {
  StandardPage,
  RadioInline,
  FieldContainer
} from "../../../_components";
import { DateRangeGroup } from "./_components/DateRangeGroup";

const validateAllergyShots = values => {
  const errors = { shots: {} };

  if (!values.shots.answer) {
    errors.shots.answer = "Please indicate if you've had shots.";
  } else if (values.shots.answer === "Yes") {
    if (!values.shots.helpful) {
      errors.shots.helpful = "Please make a selection";
    }
    if (!values.shots.reactions) {
      errors.shots.reactions = "Please make a selection";
    }
  }

  return errors;
};

const questionText = `Allergy Shot History`;
const additionalText = ``;

const AllergyShotsPage = props => {
  const { values } = props;

  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    >
      <FormGroup>
        <FieldContainer>
          <Field
            name="shots.answer"
            component={RadioInline}
            label="Have you ever received allergy shots?"
            options={["Yes", "No"]}
          />

          {values.shots.answer === "Yes" ? (
            <div>
              <DateRangeGroup values={values} />
              <Field
                name="shots.helpful"
                component={RadioInline}
                label="Were the shots helpful?"
                options={["Yes", "No"]}
              />
              <Field
                name="shots.reactions"
                component={RadioInline}
                label="Did you have any bad reactions?"
                options={["Yes", "No"]}
              />
            </div>
          ) : null}
        </FieldContainer>
      </FormGroup>
    </StandardPage>
  );
};

export { AllergyShotsPage, validateAllergyShots };
