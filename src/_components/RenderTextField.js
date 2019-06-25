import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  formControl: {
    paddingRight: 6,
    paddingBottom: 6,
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

const RenderTextField = props => {
  const {
    input,
    inputProps,
    placeholder,
    autoFocus,
    validating,
    meta: { touched, error }
  } = props;
  const classes = useStyles();

  return (
    <FormControl
      className={classes.formControl}
      error={error && touched}
      variant="outlined"
      fullWidth={true}
    >
      <OutlinedInput
        id={input.name}
        {...input}
        autoFocus={autoFocus}
        className={classes.textRoot}
        placeholder={placeholder}
        inputProps={inputProps}
        classes={{ input: classes.textInput }}
        endAdornment={
          validating && (
            <InputAdornment className={classes.adornment} position="end">
              <CircularProgress
                color="secondary"
                size={20}
                className={classes.validating}
              />
            </InputAdornment>
          )
        }
      />
      {error && touched && (
        <FormHelperText
          id={`${input.name}-text`}
          classes={{ root: classes.formHelper }}
        >
          {error}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export { RenderTextField };
