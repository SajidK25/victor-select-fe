import React from "react";
import Radio from "@material-ui/core/Radio";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  textInput: {
    display: "none"
  }
});

export const RadioWrapper = ({
  input: { checked, onChange, value, ...restInput },
  meta,
  hidden,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <Radio
      {...rest}
      classes={hidden && { root: classes.textInput }}
      inputProps={restInput}
      onChange={onChange}
      checked={Boolean(checked)}
      type="radio"
      value={value}
    />
  );
};
