import React from "react";
import { Field } from "react-final-form";
import Box from "@material-ui/core/Box";

import { RenderTextField, StandardPage } from "../../_components";
import { normalizeDate, dateIsValid, getAge } from "../../_helpers";

const validateBirthdate = values => {
  const errors = { personal: {} };

  if (!values.personal.birthDate) {
    errors.personal.birthDate = "Required";
  } else if (!dateIsValid(values.personal.birthDate)) {
    errors.personal.birthDate = "This isn't a valid date.";
  } else {
    const age = getAge(values.personal.birthDate);
    if (age < 18) {
      errors.personal.birthDate =
        "Our service isn't available to people under the age of 18.";
    } else if (age > 100) {
      errors.personal.birthDate = "This isn't a valid date.";
    }
  }

  return errors;
};

const questionText = "What's your birth date?";
const additionalText = "";

let BirthdatePage = props => {
  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      alignTitles="center"
      {...props}
    >
      <Box mx="auto" width={250}>
        <Field
          name="personal.birthDate"
          type="input"
          inputProps={{
            style: { fontSize: 24, textAlign: "center" }
          }}
          label=""
          component={RenderTextField}
          parse={normalizeDate}
          autoFocus={true}
          placeholder="MM/DD/YYYY"
        />
      </Box>
    </StandardPage>
  );
};

export { BirthdatePage, validateBirthdate };
