import React from "react";
import { Field } from "react-final-form";
import FormGroup from "@material-ui/core/FormGroup";
import { StandardPage, CheckboxMulti } from "../../../_components";

const options = [
  {
    name: "makeWorse.irritants",
    label: "Irritants",
    options: [
      "Smoke",
      "Air Pollution",
      "Fumes/Car Exhaust",
      "Strong Odors or Perfumes"
    ]
  },
  {
    name: "makeWorse.medicine",
    label: "Medicine",
    options: ["Aspirin", "NSAID"]
  },
  {
    name: "makeWorse.allergens",
    label: "Allergens",
    options: [
      "Grass",
      "Dust",
      "Damp Areas",
      "Animal Dander",
      "Tree Pollen",
      "Molds"
    ]
  },
  {
    name: "makeWorse.location",
    label: "Location",
    options: ["Outdoors", "Indoors", "Home", "School", "Work"]
  }
];

const validateMakeWorse = values => {
  const errors = { makeWorse: {} };

  return errors;
};

const questionText = `Check the things that make your symptoms worse:`;
const additionalText = ``;

const MakeWorsePage = props => {
  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    >
      <FormGroup>
        {options.map(o => (
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

export { MakeWorsePage, validateMakeWorse };
