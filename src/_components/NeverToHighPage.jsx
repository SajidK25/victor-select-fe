import React from "react";
import { Field } from "react-final-form";
import FormGroup from "@material-ui/core/FormGroup";
import Box from "@material-ui/core/Box";
import { NeverToHigh } from "./NeverToHigh";
import { StandardPage } from "./StandardPage";

export const NeverToHighPage = props => {
  const { options, ...rest } = props;

  return (
    <StandardPage {...rest}>
      <Box mt={2}>
        <FormGroup>
          {options.map(o => (
            <Field
              name={o.name}
              key={o.name}
              component={NeverToHigh}
              label={o.label}
            />
          ))}
        </FormGroup>
      </Box>
    </StandardPage>
  );
};
