import React from "react";
import Select from "@material-ui/core/Select";

const RenderStdSelect = (props) => {
  const {
    label,
    options,
    input,
    inputProps,
    meta: { error },
    ...rest
  } = props;

  console.log("Input", inputProps);
  return (
    <Select
      {...input}
      {...rest}
      label={label}
      error={error}
      SelectDisplayProps={{ ...inputProps }}
    >
      {options.map((i) => (
        <option key={i.value} value={i.value}>
          {i.label}
        </option>
      ))}
    </Select>
  );
};

export { RenderStdSelect };
