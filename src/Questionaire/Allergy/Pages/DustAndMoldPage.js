import React from "react";
import { Field } from "react-final-form";
import FormGroup from "@material-ui/core/FormGroup";
import {
  StandardPage,
  RadioInline,
  CheckboxInline,
  FieldContainer,
} from "../../../_components";

const validateDustAndMold = (values) => {
  const errors = {};

  if (!values.mold.selected) {
    errors.mold = { selected: "Please choose an option." };
  }

  return errors;
};

const questionText = "Tell us more about your environment.";
const additionalText = "";

const DustAndMoldPage = (props) => {
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
            name="mold.selected"
            component={RadioInline}
            label="Does your home have a mold or mildew problem?"
            options={["Yes", "No"]}
          />
          {values.mold.selected === "Yes" ? (
            <div>
              <Field
                name="mold.problem"
                component={RadioInline}
                label="Type of problem"
                options={["Major Problem", "Minor Problem"]}
              />
              <Field
                name="mold.where"
                component={CheckboxInline}
                label="Where is it?"
                options={[
                  "Bathroom",
                  "Basement",
                  "Kitchen",
                  "Window Sills",
                  "Other",
                ]}
              />
            </div>
          ) : null}
        </FieldContainer>
      </FormGroup>
    </StandardPage>
  );
};

export { DustAndMoldPage, validateDustAndMold };
