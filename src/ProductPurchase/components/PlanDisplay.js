import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import { makeStyles } from "@material-ui/core/styles";
import { getPricing } from "../_util";

const useStyles = makeStyles((theme) => ({
  radioRoot: {
    display: "none",
    alignSelf: "self-start",
    padding: 0,
  },
  labelRoot: {
    margin: 0,
    flexShrink: 0,
    width: "33.333%",
    height: 90,
    backgroundColor: "#FFFFFF",
    border: (props) => props.border,
    zIndex: (props) => props.zIndex,
    "&:first-child": {
      marginRight: -1,
      borderTopLeftRadius: 2,
      borderBottomLeftRadius: 2,
    },
    "&:nth-child(2)": {
      marginRight: -1,
    },
    "&:last-child": {
      borderTopRightRadius: 2,
      borderBottomRightRadius: 2,
    },
  },
  labelBox: {
    width: "100%",
    height: "100%",
    display: "block",
    position: "relative",
    textAlign: "center",
  },
  choiceTitle: {
    fontSize: 14,
    margin: "15px 0 0",
    fontWeight: 400,
  },
  choicePrice: {
    position: "absolute",
    top: 37,
    margin: 0,
    width: "100%",
  },
  price: {
    fontSize: 16,
    fontWeight: 500,
  },
  perMonth: {
    fontSize: 13,
    fontWeight: 33,
  },
  savingsDisplay: {
    position: "absolute",
    bottom: 8,
    width: "100%",
    fontSize: 12,
    color: theme.palette.primary.main,
    fontWeight: 300,
    margin: 0,
  },
  regularDisplay: {
    position: "absolute",
    bottom: 8,
    width: "100%",
    fontSize: 12,
    fontWeight: 300,
    margin: 0,
  },
  savings: {},
}));

const OptionDisplay = (props) => {
  const { product, option } = props;
  const classes = useStyles();
  const pricing = getPricing(product, option);

  return (
    <>
      <div className={classes.choiceTitle}>{pricing.planName}</div>
      <p className={classes.choicePrice}>
        <span className={classes.price}>{pricing.amountPerMonth}</span>/
        <span className={classes.perMonth}>mo</span>
      </p>
      <p
        className={
          option === "1" ? classes.regularDisplay : classes.savingsDisplay
        }
      >
        <span>{pricing.savings}</span>
      </p>
    </>
  );
};

export const PlanDisplay = (props) => {
  const { product, option, input } = props;
  const labelStyle = {
    border: "1px solid rgba(0, 0, 0, 0.2)",
    zIndex: 1,
  };

  if (input.value === option) {
    labelStyle.border = "1px solid black";
    labelStyle.zIndex = 3;
  }

  const classes = useStyles(labelStyle);

  return (
    <FormControlLabel
      classes={{
        root: classes.labelRoot,
        label: classes.labelBox,
      }}
      label={<OptionDisplay product={product} option={option} />}
      value={option}
      key={option}
      onChange={input.onChange}
      checked={input.value === option}
      control={
        <Radio
          name={input.name}
          classes={{
            root: classes.radioRoot,
          }}
          type="radio"
        />
      }
    />
  );
};
