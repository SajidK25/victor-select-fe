import React from "react";
import { Field } from "react-final-form";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {
  StandardPage,
  RenderStdSelect,
  RenderStdTextField,
  RenderNoteField,
  RadioInline,
} from "../../../_components";

const useStyles = makeStyles({
  wrapper: {
    width: 270,
    margin: "0 auto",
    backgroundColor: "#ffffff",
  },
  paper: {
    padding: 16,
  },
  heightWrapper: {
    display: "flex",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    width: 114,
    textAlign: "right",
    marginRight: 8,
  },
  height: {
    marginLeft: 12,
    textAlign: "right",
  },
  weightWrapper: {
    display: "flex",
    alignItems: "center",
    marginBottom: 8,
  },
});

const timeOptions = [
  { value: "day", label: "day" },
  { value: "week", label: "week" },
];

const FieldLabel = (props) => {
  const { small } = props;

  const typeStyle = {
    marginTop: 20,
    fontWeight: 400,
    fontSize: 16,
    marginLeft: 16,
  };

  const smallStyle = {
    marginTop: 0,
    fontWeight: 200,
    fontSize: 13,
    marginLeft: 16,
  };

  return (
    <Typography
      style={small ? smallStyle : typeStyle}
      variant="body1"
      align="left"
    >
      {props.children}
    </Typography>
  );
};

const validateDiet = (values) => {
  const errors = { diet: {} };

  return errors;
};

const questionText = "Tell us about your diet";
const additionalText = "";

const DietPage = (props) => {
  const classes = useStyles();

  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    >
      <Paper className={classes.paper}>
        <FieldLabel>
          How do you rate the overall nutritional content of your diet.
        </FieldLabel>
        <FieldLabel small={true}>(1-Not so good 5-Awesome)</FieldLabel>
        <Field
          name="diet.rating"
          component={RadioInline}
          label=""
          columns={5}
          options={["1", "2", "3", "4", "5"]}
        />
        <FieldLabel>
          What is the average number of alcoholic beverage servings consumed per
          day? Per week?
        </FieldLabel>
        <Typography
          style={{
            marginTop: 0,
            fontWeight: 200,
            marginLeft: 16,
            fontSize: 13,
          }}
          variant="body1"
          align="left"
        >
          (Note: 1 serving = 4 oz. (1/2 cup) wine, 12 oz. (1-1/2 cup) regular or
          light beer, 1-1/2 oz. distilled liquor 80-100 proof)
        </Typography>
        <div className={classes.heightWrapper}>
          <div className={classes.label}>Number:</div>
          <div className={classes.weight}>
            <Field
              component={RenderStdTextField}
              required
              id="weight"
              name="diet.alcoholCount"
              type="number"
              min="0"
              max="99"
              autoComplete=""
              inputProps={{
                style: { width: 98, textAlign: "right" },
              }}
            />
          </div>
          <div className={classes.height}>
            <Field
              component={RenderStdSelect}
              id="inches"
              native={true}
              name="diet.alcoholInterval"
              options={timeOptions}
              inputProps={{
                style: { textAlign: "right", width: 50 },
              }}
              label=""
            />
          </div>
        </div>
        <Typography
          style={{
            marginTop: 20,
            fontWeight: 400,
            marginLeft: 16,
            fontSize: 16,
          }}
          variant="body1"
          align="left"
        >
          What are FOODS YOU CRAVE or you feel are good to eat?
        </Typography>
        <Field
          name="diet.crave"
          component={RenderNoteField}
          autoFocus={true}
          type="text"
        />
      </Paper>
    </StandardPage>
  );
};

export { DietPage, validateDiet };
