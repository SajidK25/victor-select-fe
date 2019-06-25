import React from "react";
import { Field } from "react-final-form";
import FormGroup from "@material-ui/core/FormGroup";
import Box from "@material-ui/core/Box";
import { RelativeSelect } from "./RelativeSelect";
import { StandardPage } from "./StandardPage";

export const RelativeSelectPage = props => {
  const { options, ...rest } = props;

  return (
    <StandardPage {...rest}>
      <Box mt={2}>
        <FormGroup>
          {options.map(o => (
            <Field
              name={o.name}
              key={o.name}
              component={RelativeSelect}
              label={o.label}
            />
          ))}
        </FormGroup>
      </Box>
    </StandardPage>
  );
};
