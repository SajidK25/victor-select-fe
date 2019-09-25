import React from "react";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import { Warning } from "./";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    borderRadius: 2,
    border: 0,
    padding: 8,
    borderStyle: "solid",
    borderWidth: 0,
    marginBottom: theme.spacing(1),
    backgroundColor: "white",
    "&:hover": {
      borderWidth: 0.5,
      borderColor: theme.palette.primary.main
    }
  },
  root: {
    margin: 0,
    width: "100%",
    verticalAlign: "top"
  },
  labelRoot: {
    width: "100%"
  },
  radioRoot: {
    alignSelf: "self-start",
    padding: 0
  }
}));

const DetailedRadio = props => {
  const { input, id, options, pricing, LabelDisplay, warning, ...rest } = props;
  const classes = useStyles();

  return (
    <Paper className={classes.container} key={id}>
      <FormControlLabel
        classes={{
          root: classes.root,
          label: classes.labelRoot
        }}
        label={
          <LabelDisplay
            id={id}
            options={options}
            pricing={pricing}
            checked={input.value === id}
            {...rest}
          />
        }
        value={id}
        key={id}
        onChange={input.onChange}
        checked={input.value === id}
        control={
          <Radio
            name={input.name}
            color="primary"
            classes={{
              root: classes.radioRoot
            }}
            type="radio"
          />
        }
      />
      {warning && input.value === id ? <Warning warning={warning} /> : null}
    </Paper>
  );
};

export { DetailedRadio };
