import React from "react";
import { Field } from "react-final-form";
import FormGroup from "@material-ui/core/FormGroup";
import { StandardPage, RadioInline, FieldContainer } from "../../../_components";

const validateVitaminD = (values) => {
  const errors = { vitaminD: {} };
  if (!values.vitaminD.answer) {
    errors.vitaminD.answer = "Please make a selection";
  }

  if (!values.vitaminD.answer === "Yes" && !values.vitaminD.supplement) {
    errors.vitaminD.supplement = "Please make a selection";
  }

  return errors;
};

const questionText = `Vitamin D`;
const additionalText = ``;

const VitaminDPage = (props) => {
  const { values } = props;
  return (
    <StandardPage questionText={questionText} additionalText={additionalText} {...props}>
      <FormGroup>
        <FieldContainer>
          <Field name="vitaminD.answer" component={RadioInline} label=" Have you ever had your vitamin D levels checked?" options={["Yes", "No"]} />

          {values.vitaminD.answer === "Yes" ? (
            <div>
              <Field name="vitaminD.supplement" component={RadioInline} label="Do you take a Vitamin D supplement?" options={["Yes", "No"]} />
            </div>
          ) : null}
        </FieldContainer>
      </FormGroup>
    </StandardPage>
  );
};

export { VitaminDPage, validateVitaminD };
