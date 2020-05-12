import React from "react";
import { Field } from "react-final-form";
import FormGroup from "@material-ui/core/FormGroup";
import { StandardPage, CheckboxMulti } from "../../../_components";

const problems = [
  "Skipping Meals",
  "Craving carbohydrates",
  "Eating Foods too high in fat",
  "Large portion sizes",
  "Eating too many meals in restaurants",
  "Too much alcohol",
  "Eating for reasons other than hunger",
  "Frequent snacking",
  "Eating before going to bed",
  "Binging on food",
  "Making yourself vomit after meals",
  "Other",
];

const options = [
  {
    name: "dietaryProblem.answer",
    label: "",
    options: problems,
  },
];

const validateDietaryProblem = () => {
  const errors = { DietaryProblem: {} };

  return errors;
};

const questionText = `What dietary problem areas apply to you?`;
const additionalText = `Check all that apply`;

const DietaryProblemPage = (props) => {
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

export { DietaryProblemPage, validateDietaryProblem };
