import React from "react";
import { Field } from "react-final-form";
import FormGroup from "@material-ui/core/FormGroup";
import Paper from "@material-ui/core/Paper";
import {
  StandardPage,
  RadioInline,
  FieldContainer
} from "../../../_components";

const options = [
  {
    name: "dwelling.type",
    label: "What type of dwelling do you live in?",
    options: [
      "Single Home",
      "Duplex",
      "Apartment or Townhome",
      "Trailer Home",
      "Other"
    ]
  },
  {
    name: "dwelling.location",
    label: "Where is it located?",
    options: ["City", "Suburban", "Rural", "Other"]
  }
];

const validateDwelling = values => {
  const errors = { dwelling: {} };
  if (!values.dwelling.location) {
    errors.dwelling.location = "Please select a dwelling location";
  } else if (
    values.dwelling.location === "Other" &&
    !values.dwelling.locationother
  ) {
    errors.dwelling.location = "Other value is required";
  }

  if (!values.dwelling.type) {
    errors.dwelling.type = "Please select a dwelling type";
  } else if (values.dwelling.type === "Other" && !values.dwelling.typeother) {
    errors.dwelling.type = "Other value is required";
  }

  return errors;
};

const questionText = `Tell us about where you live`;
const additionalText = ``;

const DwellingPage = props => {
  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    >
      <FormGroup>
        {options.map(o => (
          <FieldContainer key={o.name}>
            <Field
              name={o.name}
              key={o.name}
              component={RadioInline}
              label={o.label}
              options={o.options}
            />
          </FieldContainer>
        ))}
      </FormGroup>
    </StandardPage>
  );
};

export { DwellingPage, validateDwelling };
