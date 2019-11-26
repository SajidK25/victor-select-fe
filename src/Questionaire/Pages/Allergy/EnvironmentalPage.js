import React from "react";
import { Field } from "react-final-form";
import FormGroup from "@material-ui/core/FormGroup";
import Paper from "@material-ui/core/Paper";
import { SingleTextField } from "./_components/SingleTextField";
import {
  StandardPage,
  RadioInline,
  FieldContainer,
  RenderStdTextField
} from "../../../_components";

const options = [
  {
    name: "environment.heating",
    label: "Heating:",
    options: [
      "Radiant",
      "Forced Air",
      "Heat Pump",
      "Wood Burning Stove",
      "Pellet Stove",
      "Other"
    ]
  },
  {
    name: "environment.airConditioning",
    label: "Air Conditioning:",
    options: ["Central", "Window Units", "None"]
  },
  {
    name: "environment.bedroomFloor",
    label: "Type of Floor - Bedroom:",
    options: ["Carpet", "Wood/ Laminate", "Tile", "Concrete", "Other"]
  },
  {
    name: "environment.familyRoomFloor",
    label: "Type of Floor - Family Room:",
    options: ["Carpet", "Wood/ Laminate", "Tile", "Concrete", "Other"]
  },
  {
    name: "environment.mattress",
    label: "Mattress Type:",
    options: ["Regular", "Foam", "Air Mattress", "Waterbed", "Futon", "Other"]
  },
  {
    name: "environment.pillow",
    label: "Pillow Type:",
    options: ["Synthetic", "Foam", "Down", "Feather", "Cotton", "Other"]
  },
  {
    name: "environment.comforter",
    label: "Comforter Type:",
    options: ["Synthetic", "Down", "Feather", "None", "Other"]
  }
];

const validateEnvironmental = values => {
  const errors = { environment: {} };
  //   if (!values.dwelling.location) {
  //     errors.dwelling.location = "Please select a dwelling location";
  //   } else if (
  //     values.dwelling.location === "Other" &&
  //     !values.dwelling.locationother
  //   ) {
  //     errors.dwelling.location = "Other value is required";
  //   }

  //   if (!values.dwelling.type) {
  //     errors.dwelling.type = "Please select a dwelling type";
  //   } else if (values.dwelling.type === "Other" && !values.dwelling.typeother) {
  //     errors.dwelling.type = "Other value is required";
  //   }

  return errors;
};

const questionText = `Tell us about your environment.`;
const additionalText = ``;

const EnvironmentalPage = props => {
  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    >
      <SingleTextField
        name="environment.occupation"
        label="Occupation or Grade"
        heading="What is/was your occupation or, if you are still a student, your grade in school?"
      />

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

export { EnvironmentalPage, validateEnvironmental };
