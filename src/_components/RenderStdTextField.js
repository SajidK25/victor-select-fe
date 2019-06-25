import React from "react";
import TextField from "@material-ui/core/TextField";

const RenderStdTextField = props => {
  const {
    input,
    meta: { touched, error }
  } = props;

  return (
    <TextField
      {...input}
      {...props}
      error={error && touched}
      helperText={touched && error}
    />
  );
};

export { RenderStdTextField };
