import React from "react";
import { Field } from "react-final-form";
import FormGroup from "@material-ui/core/FormGroup";
import {
  StandardPage,
  RadioInline,
  FieldContainer,
} from "../../../_components";

const weight = ["N/A", "Under", "Normal", "Over"];

const validateHousehold = () => {
  const errors = {};

  return errors;
};

const questionText = "Are any members of your household overweight?";
const additionalText = "";

const HouseholdPage = (props) => {
  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    >
      <FormGroup>
        <FieldContainer>
          <Field
            name="household.spouse"
            component={RadioInline}
            label="Spouse/Partner"
            columns={4}
            options={weight}
          />
          <Field
            name="household.child1"
            component={RadioInline}
            columns={4}
            label="Child One"
            options={weight}
          />
          <Field
            name="household.child2"
            component={RadioInline}
            columns={4}
            label="Child Two"
            options={weight}
          />
          <Field
            name="household.child3"
            component={RadioInline}
            columns={4}
            label="Child Three"
            options={weight}
          />
          <Field
            name="household.child4"
            component={RadioInline}
            columns={4}
            label="Child Four"
            options={weight}
          />
          <Field
            name="household.other"
            component={RadioInline}
            columns={4}
            label="Other"
            options={weight}
          />
        </FieldContainer>
      </FormGroup>
    </StandardPage>
  );
};

export { HouseholdPage, validateHousehold };
