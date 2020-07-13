import React from "react";
import { Field } from "react-final-form";
import FormGroup from "@material-ui/core/FormGroup";
import { StandardPage, RadioInline, FieldContainer } from "../../../_components";

const validateTreatmentType = (values) => {
  const errors = { treatment: {} };

  if (!values.treatment.medication) {
    errors.treatment.medication = "Please make a selection";
  }

  if (!values.treatment.medication === "Yes" && !values.treatment.medicationExplain) {
    errors.treatment.medicationExplain = "Please provide details";
  }
  if (!values.treatment.medication === "Yes" && !values.treatment.medicationHelpful) {
    errors.treatment.medicationHelpful = "Please make a selection";
  }

  if (!values.treatment.therapy) {
    errors.treatment.therapy = "Please make a selection";
  }

  if (!values.treatment.therapy === "Yes" && !values.treatment.therapyHelpful) {
    errors.treatment.therapyHelpful = "Please make a selection";
  }

  return errors;
};

const questionText = `Type of Treatment`;
const additionalText = ``;

const TreatmentTypePage = (props) => {
  const { values } = props;
  return (
    <StandardPage questionText={questionText} additionalText={additionalText} {...props}>
      <FormGroup>
        <FieldContainer>
          <Field
            name="treatment.medication"
            component={RadioInline}
            label=" Were you treated with medication?"
            options={["Yes", "No"]}
            explain="treatment.medicationExplain"
            explainText="What type of medication?"
          />
          {values.treatment.medication === "Yes" ? (
            <div>
              <Field name="treatment.medicationHelpful" component={RadioInline} label="Was the medication helpful?" options={["Yes", "No"]} />
            </div>
          ) : null}
        </FieldContainer>
        <FieldContainer>
          <Field name="treatment.therapy" component={RadioInline} label=" Were you treated with therapy?" options={["Yes", "No"]} />
          {values.treatment.therapy === "Yes" ? (
            <div>
              <Field name="treatment.therapyHelpful" component={RadioInline} label="Was the therapy helpful?" options={["Yes", "No"]} />
            </div>
          ) : null}
        </FieldContainer>
      </FormGroup>
    </StandardPage>
  );
};

export { TreatmentTypePage, validateTreatmentType };
