import React from "react";
import { Field, useForm, useField, useFormState } from "react-final-form";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { RenderTextField, StandardPage } from "../../../_components";
import { normalizeZip } from "../../../_helpers";
import { zipcodeIsValid } from "../../../_helpers/zipcodes";

const validZips = [
  { min: 73301, max: 73301 },
  { min: 75001, max: 75501 },
  { min: 75503, max: 79999 },
  { min: 88510, max: 88589 }
];

const checkZips = zipCode => {
  for (let i = 0; i < validZips.length; i++) {
    if (zipCode >= validZips[i].min && zipCode <= validZips[i].max) {
      return true;
    }
  }
  return false;
};

const verifyZipcode = async (zipcode, client) => {
  const result = await zipcodeIsValid(zipcode, client);
  if (!result) {
    return {
      personal: { zipCode: "Sorry, we aren't servicing your state yet." }
    };
  }
  return { personal: {} };
};

const validateZipcode = (values, client) => {
  const errors = { personal: {} };
  if (!values.personal.zipCode) {
    errors.personal.zipCode = "Zipcode is required";
  } else if (values.personal.zipCode.length !== 5) {
    errors.personal.zipCode = "Please enter a valid zip code.";
  }

  //else if (!checkZips(parseInt(values.personal.zipCode))) {
  //  errors.personal.zipCode = "Sorry, we aren't servicing your state yet.";
  // }

  return Object.keys(errors.personal).length
    ? errors
    : verifyZipcode(values.personal.zipCode, client);
};

const questionText = "What is your zip code?";
const additionalText = "";

const ZipcodePage = props => {
  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      alignTitles="center"
      {...props}
    >
      <Box width={200} mx="auto">
        <Field
          name="personal.zipCode"
          inputProps={{
            style: { textAlign: "center" }
          }}
          component={RenderTextField}
          placeholder="Zip code"
          parse={normalizeZip}
          autoFocus={true}
          type="tel"
        />
      </Box>
      <Box mx="auto" mb={2} px={2}>
        <Typography variant="body1" align="center">
          {`We need to know where you live so we'll know how to proceed.
          We're not in every state yet but we're working on it!`}
        </Typography>
      </Box>
    </StandardPage>
  );
};

export { ZipcodePage, validateZipcode };
