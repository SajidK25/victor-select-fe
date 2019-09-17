import React from "react";
import { Field } from "react-final-form";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { RenderSelect } from "./";

const SelectField = props => {
  const { name, options, label } = props;

  return (
    <Box display="flex" alignItems="center" pl={1} mb={1}>
      <Box width="65%">
        <Typography variant="body2">{label}</Typography>
      </Box>

      <Box component="div" width="35%">
        <Field name={name} options={options} component={RenderSelect} />
      </Box>
    </Box>
  );
};

export { SelectField };
