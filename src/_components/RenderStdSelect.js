import React from "react";
import Select from "@material-ui/core/Select";

const RenderStdSelect = props => {
  const {
    label,
    options,
    input,
    meta: { touched, error },
    ...rest
  } = props;

  return (
    <Select {...input} {...rest} inputProps={{ ...input }}>
      {options.map(i => (
        <option key={i.value} value={i.value}>
          {i.label}
        </option>
      ))}
    </Select>
  );
};

export { RenderStdSelect };
