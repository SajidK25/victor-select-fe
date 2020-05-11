import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Field } from "react-final-form";
import { FieldContainer, RenderStdTextField } from "../../../../_components";

const useStyles = makeStyles({
  radioLabel: {
    fontSize: 13,
    fontWeight: 300,
    lineHeight: "16px",
    marginLeft: -4,
    marginRight: 4,
    marginTop: 0
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "baseline",
    paddingLeft: 16
  },
  fieldDiv: {
    width: "33%",
    display: "inline-flex"
  },
  textBox: {
    margin: 0,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 0
  },
  textRoot: {
    marginLeft: -36,
    backgroundColor: "white"
  },
  radioRoot: {
    marginLeft: 0,
    marginRight: 0
  },
  textLabel: {
    marginLeft: 16,
    fontWeight: 400
  },
  control: {
    paddingTop: 2,
    paddingBottom: 2
  }
});

export const SingleTextField = props => {
  const { name, label, heading, ...rest } = props;
  const classes = useStyles();

  return (
    <FieldContainer>
      {heading ? (
        <Typography className={classes.textLabel}>{heading}</Typography>
      ) : null}
      <div className={classes.textBox}>
        <Field
          component={RenderStdTextField}
          id={name}
          name={name}
          label={label}
          fullWidth
          {...rest}
        />
      </div>
    </FieldContainer>
  );
};
