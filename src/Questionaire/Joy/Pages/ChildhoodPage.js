import React from "react";
import { Field } from "react-final-form";
import FormGroup from "@material-ui/core/FormGroup";
import { StandardPage, RadioInline, FieldContainer } from "../../../_components";

const validateChildhood = (values) => {
  const errors = { childhood: {} };

  if (!values.childhood.answer) {
    errors.childhood.answer = "Please make a selection";
  }

  return errors;
};

const questionText = `Childhood Memories`;
const additionalText = ``;

const ChildhoodPage = (props) => {
  return (
    <StandardPage questionText={questionText} additionalText={additionalText} {...props}>
      <FormGroup>
        <FieldContainer>
          <Field
            name="childhood.answer"
            component={RadioInline}
            label="Can you remember from childhood extreme mood changes that went from very sad to very happy?"
            options={["Yes", "No"]}
          />
        </FieldContainer>
      </FormGroup>
    </StandardPage>
  );
};

export { ChildhoodPage, validateChildhood };
