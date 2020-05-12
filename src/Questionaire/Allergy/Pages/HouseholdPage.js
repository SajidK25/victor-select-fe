import React from "react";
import { Field } from "react-final-form";
import FormGroup from "@material-ui/core/FormGroup";
import { StandardPage, CheckboxMulti } from "../../../_components";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const options = [
  {
    name: "symptomMonths.have",
    label: "During what month(s) do you have the symptoms you have indicated?",
    options: months,
  },
  {
    name: "symptomMonths.severe",
    label: "Which month(s) do you find these symptoms to be most severe?",
    options: months,
  },
];

const validateSymptomMonths = (values) => {
  const errors = { symptomMonths: {} };

  return errors;
};

const questionText = `When do you have the symptoms you indicated?`;
const additionalText = `Check all that apply`;

const SymptomMonthsPage = (props) => {
  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    >
      <FormGroup>
        {options.map((o) => (
          <Field
            name={o.name}
            key={o.name}
            component={CheckboxMulti}
            label={o.label}
            options={o.options}
          />
        ))}
      </FormGroup>
    </StandardPage>
  );
};

export { SymptomMonthsPage, validateSymptomMonths };
