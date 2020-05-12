import React from "react";
import { Field } from "react-final-form";
import FormGroup from "@material-ui/core/FormGroup";
import { StandardPage, RadioInline } from "../../../_components";

const scale = ["1", "2", "3", "4", "5"];

const options = [
  {
    name: "scale.important",
    label: "How important is achieving your weight goal to you right now?",
    options: scale,
  },
  {
    name: "scale.changes",
    label: "How hard is it for you to make lifestyle changes?",
    options: scale,
  },
  {
    name: "scale.support",
    label: "How much support can your family and friends provide?",
    options: scale,
  },
  {
    name: "scale.sabotage",
    label: "I fear someone might sabotage my efforts to lose weight.",
    options: scale,
  },
  {
    name: "scale.confident",
    label: "How confident are you that you can lose weight this time?",
    options: scale,
  },
];

const validateScale = (values) => {
  const errors = { scale: {} };
  if (!values.scale.important) {
    errors.scale.important = "Please make a selection";
  }
  if (!values.scale.changes) {
    errors.scale.changes = "Please make a selection";
  }
  if (!values.scale.support) {
    errors.scale.support = "Please make a selection";
  }
  if (!values.scale.sabotage) {
    errors.scale.sabotage = "Please make a selection";
  }
  if (!values.scale.confident) {
    errors.scale.confident = "Please make a selection";
  }

  return errors;
};

const questionText = `Please answer the following questions on a scale of 1 – 5.`;
const additionalText = `SCALE: 1=LEAST  5=MOST`;

const ScalePage = (props) => {
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
            component={RadioInline}
            label={o.label}
            options={o.options}
            columns={5}
          />
        ))}
      </FormGroup>
    </StandardPage>
  );
};

export { ScalePage, validateScale };
