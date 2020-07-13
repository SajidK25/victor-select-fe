import React from "react";
import { Field } from "react-final-form";
import Radio from "@material-ui/core/Radio";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { ErrorDisplay } from "./";
import { makeStyles } from "@material-ui/core/styles";
import { standardStyles } from "../_assets/styles";
import { RenderStdTextField, RenderNoteField } from "./";

const useStyles = makeStyles({
  ...standardStyles,
  radioLabel: {
    fontSize: 13,
    fontWeight: 300,
    lineHeight: "16px",
    marginLeft: -4,
    marginRight: 4,
    marginTop: 0,
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "baseline",
    paddingLeft: 16,
  },
  fieldDiv1: {
    width: "100%",
    display: "inline-flex",
  },
  fieldDiv2: {
    width: "50%",
    display: "inline-flex",
  },
  fieldDiv3: {
    width: "33%",
    display: "inline-flex",
  },
  fieldDiv4: {
    width: "25%",
    display: "inline-flex",
  },
  fieldDiv5: {
    width: "20%",
    display: "inline-flex",
  },
  textBox: {
    margin: 0,
    fontSize: 13,
    paddingBottom: 4,
    paddingTop: 0,
  },
  textRoot: {
    marginLeft: -36,
    backgroundColor: "white",
  },
  radioRoot: {
    marginLeft: 0,
    marginRight: 0,
  },
  textLabel: {
    marginLeft: 16,
    fontWeight: 400,
  },
  control: {
    paddingTop: 2,
    paddingBottom: 2,
  },
});

export const RadioInline = (props) => {
  const {
    input,
    label,
    meta: { touched, error },
    options,
    columns = 3,
    explain,
    explainText,
  } = props;

  const classes = useStyles();

  return (
    <>
      <Typography className={classes.textLabel}>{label}</Typography>
      <div className={classes.flexContainer}>
        {options.map((o) => (
          <div key={o} className={classes[`fieldDiv${columns}`]}>
            <FormControlLabel
              classes={{
                root: classes.radioRoot, // class name, e.g. `classes-nesting-root-x`
                label: classes.radioLabel, // class name, e.g. `classes-nesting-label-x`
              }}
              className={classes.control}
              key={o}
              value={o}
              onChange={input.onChange}
              checked={input.value === o}
              type="radio"
              control={
                <Radio
                  name={input.name}
                  classes={{
                    root: classes.control,
                  }}
                  color="primary"
                  type="radio"
                />
              }
              label={o}
            />
            {input.value === "Other" && o === "Other" ? (
              <Field
                name={`${input.name}other`}
                component={RenderStdTextField}
                InputProps={{
                  classes: { root: classes.textRoot, input: classes.textBox },
                }}
                margin="dense"
                autoFocus={true}
                type="text"
              />
            ) : null}
          </div>
        ))}
      </div>
      {explain && input.value === "Yes" ? <Field name={explain} component={RenderNoteField} placeholder={explainText} type="text" /> : null}
      {touched && error && <ErrorDisplay errorText={error} />}
    </>
  );
};
