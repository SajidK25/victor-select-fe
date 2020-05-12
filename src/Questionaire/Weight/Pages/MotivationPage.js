import React from "react";
import { Field } from "react-final-form";
import FormGroup from "@material-ui/core/FormGroup";
import { StandardPage, CheckboxMulti } from "../../../_components";

const motivations = [
  "Don’t like the way I look",
  "Clothes don’t fit anymore",
  "More energy",
  "Improve health",
  "Better work opportunities",
  "Feel better",
  "More mobility",
  "Want to wear smaller size",
  "Look Better",
  "Perform better",
  "Live longer",
  "Feel more confident socially",
  "Reduce medications",
  "Look more attractive to my partner ",
  "Upcoming vacation",
  "Want to wear more stylish clothing",
  "Attend an event",
  "Other",
];

const options = [
  {
    name: "motivation.answer",
    label: "",
    options: motivations,
  },
];

const validateMotivation = () => {
  const errors = { motivation: {} };

  return errors;
};

const questionText = `What is your motivation for wanting to lose weight?`;
const additionalText = `Check all that apply`;

const MotivationPage = (props) => {
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
            columns={2}
          />
        ))}
      </FormGroup>
    </StandardPage>
  );
};

export { MotivationPage, validateMotivation };
