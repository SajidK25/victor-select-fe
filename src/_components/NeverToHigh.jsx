import React from "react";
import Radio from "@material-ui/core/Radio";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { ErrorDisplay } from "./";
import { makeStyles } from "@material-ui/core/styles";
import { standardStyles } from "../_assets/styles";

const useStyles = makeStyles({
  ...standardStyles,
  radioLabel: {
    fontSize: 13,
    fontWeight: 300,
    lineHeight: "20px",
    marginLeft: -4,
    marginRight: 4,
    marginTop: 0
  },
  radioRoot: {
    marginLeft: 0,
    marginRight: 0
  },
  textLabel: {
    marginLeft: 8
  },
  control: {
    paddingTop: 2,
    paddingBottom: 2
  }
});

const options = ["Never", "Slight", "Moderate", "High"];

export const NeverToHigh = props => {
  const {
    name,
    input,
    label,
    meta: { touched, error }
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.contain}>
      <Typography className={classes.textLabel}>{label}</Typography>
      <Box ml={2}>
        {options.map((o, index) => (
          <FormControlLabel
            classes={{
              root: classes.radioRoot, // class name, e.g. `classes-nesting-root-x`
              label: classes.radioLabel // class name, e.g. `classes-nesting-label-x`
            }}
            className={classes.control}
            key={o}
            value={o}
            onChange={input.onChange}
            checked={input.value === o}
            control={
              <Radio
                name={name}
                classes={{
                  root: classes.control
                }}
                color="primary"
                type="radio"
              />
            }
            label={`${index} - ${o}`}
          />
        ))}
      </Box>
      {touched && error && <ErrorDisplay errorText={error} />}
    </div>
  );
};
