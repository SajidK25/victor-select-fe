import React from "react";
import { Field } from "react-final-form";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { RenderStdSelect } from "../../../../_components";

const useStyles = makeStyles({
  rangeBlock: {
    marginLeft: 32,
    fontSize: 14,
    paddingBottom: 8
  },
  textLabel: {
    marginLeft: 16,
    fontWeight: 400
  },
  toLabel: {
    marginLeft: 8,
    marginRight: 8,
    fontSize: 14
  },
  fromLabel: {
    marginRight: 8,
    fontSize: 14
  }
});

const getYearOptions = () => {
  let yearOptions = [{ value: "", label: "" }];
  const current = new Date();
  const currentYear = current.getFullYear();
  const startYear = 2000;
  for (var i = currentYear; i >= startYear; i--) {
    let option = { value: i, label: i };
    yearOptions.push(option);
  }
  return yearOptions;
};

const YearRange = props => {
  const { field1, field2 } = props;
  const classes = useStyles();
  const yearOptions = getYearOptions();

  return (
    <div className={classes.rangeBlock}>
      <Typography component="span" className={classes.fromLabel}>
        From:
      </Typography>
      <Field
        options={yearOptions}
        native
        name={field1}
        component={RenderStdSelect}
        label="Range 1"
      />
      <Typography component="span" className={classes.toLabel}>
        to:
      </Typography>
      <Field
        options={yearOptions}
        native
        name={field2}
        component={RenderStdSelect}
        label="Range 2"
      />
    </div>
  );
};

export const DateRangeGroup = props => {
  const { values } = props;
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.textLabel}>
        Specify the years you received them:
      </Typography>
      <YearRange field1="shots.range1.from" field2="shots.range1.to" />
      {values.shots.range1.from ? (
        <YearRange field1="shots.range2.from" field2="shots.range2.to" />
      ) : null}
      {values.shots.range2.from ? (
        <YearRange field1="shots.range3.from" field2="shots.range3.to" />
      ) : null}
    </div>
  );
};
