import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from "@material-ui/pickers";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";

const useStyles = makeStyles(theme => ({
  formControl: {
    paddingRight: 6,
    paddingBottom: 6,
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 0,
    verticalAlign: "top"
  },
  textRoot: {
    padding: 0
  },
  textInput: {
    backgroundColor: theme.palette.common.white,
    padding: "8px 10px",
    fontSize: 20
  },
  formHelper: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 4,
    marginBottom: 4,
    textAlign: "center"
  },
  validating: {
    margin: theme.spacing(1)
  },
  adormnment: {
    root: { backgroundColor: theme.palette.common.white }
  }
}));

const TimePicker = props => {
  const {
    input: { name, onChange, value, ...restInput },
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
