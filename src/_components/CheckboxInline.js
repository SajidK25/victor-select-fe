import React from "react";
import { Field } from "react-final-form";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import { CheckboxWrapper, RenderStdTextField } from "./";

const useStyles = makeStyles({
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "baseline",
    paddingLeft: 16
  },
  checkboxRoot: {
    marginLeft: 0,
    marginRight: 0
  },
  checkboxLabel: {
    fontSize: 13,
    fontWeight: 300,
    lineHeight: "16px",
    marginLeft: 4,
    marginRight: 4,
    marginTop: 0
  },
  textLabel: {
    marginLeft: 16,
    fontWeight: 400
  },
  fieldDiv: {
    width: "25%",
    display: "inline-flex"
  },
  textBox: {
    margin: 0,
    fontSize: 13,
    paddingBottom: 4,
    paddingTop: 0
  },
  textRoot: {
    marginLeft: -38,
    backgroundColor: "white"
  },
  control: {
    paddingTop: 2,
    paddingBottom: 2
  },
  input: {
    padding: 2,
    fontSize: 12
  }
});

export const CheckboxInline = props => {
  const { input, label, options } = props;
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.textLabel}>{label}</Typography>
      <div className={classes.flexContainer}>
        {options.map(o => (
          <div key={o} className={classes.fieldDiv}>
            <FormControlLabel
              classes={{
                root: classes.checkboxRoot, // class name, e.g. `classes-nesting-root-x`
                label: classes.checkboxLabel // class name, e.g. `classes-nesting-label-x`
              }}
              label={o}
              key={`${input.name}${o}`}
              control={
                <Field
                  name={input.name}
                  component={CheckboxWrapper}
                  classes={{
                    root: classes.input
                  }}
                  type="checkbox"
                  color="primary"
                  value={o}
                />
              }
            />
            {o === "Other" && input.value.includes("Other") ? (
              <Field
                name={`${input.name}other`}
                component={RenderStdTextField}
                InputProps={{
                  classes: { root: classes.textRoot, input: classes.textBox }
                }}
                margin="dense"
                autoFocus={true}
                type="text"
              />
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
};
