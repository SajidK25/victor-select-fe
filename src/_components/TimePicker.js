import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({
  formControl: {
    paddingRight: 6,
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 0
  }
}));

const TimePicker = props => {
  const {
    input: { name, onChange, value },
    meta,
    ...rest
  } = props;

  const showError = meta.error && meta.touched;

  const classes = useStyles();
  console.log("Input: ", props);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardTimePicker
        {...rest}
        name={name}
        margin="dense"
        error={meta.error && meta.touched}
        className={classes.formControl}
        minutesStep={5}
        inputProps={{ style: { padding: "8px 0px 8px 8px" } }}
        inputVariant="outlined"
        placeholder="08:00 AM"
        mask="__:__ _M"
        helperText={showError ? meta.error : undefined}
        onChange={onChange}
        value={value === "" ? null : value}
      />
    </MuiPickersUtilsProvider>
  );
};

export { TimePicker };
