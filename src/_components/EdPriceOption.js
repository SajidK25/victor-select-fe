import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { formatMoney } from "../_constants/drugSelections";

const useStyles = makeStyles(theme => ({
  container: {
    margin: 0,
    padding: 0
  },
  paperRoot: {
    margin: 0,
    padding: 4,
    height: 120,
    borderStyle: "solid",
    borderColor: "lightgray",
    borderWidth: 1
  },
  choiceTitle: {
    fontSize: 12,
    fontWeight: 500,
    marginTop: 8
  },
  priceBox: {
    marginTop: 15,
    width: "100%",
    lineHeight: 1
  },
  checked: {
    borderStyle: "solid",
    borderColor: theme.palette.primary.main,
    borderWidth: 1
  },
  subHead: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: theme.spacing(1.5)
  },
  perMonth: {
    fontSize: 24,
    fontWeight: 400
  },
  savings: {
    marginTop: 15,
    color: theme.palette.primary.main,
    fontSize: 14,
    fontWeight: 500
  },
  fullPrice: {
    marginTop: 15,
    fontSize: 14,
    fontWeight: 400
  },
  small: {
    fontSize: 12
  }
}));

export const EdPriceOption = props => {
  const { options, checked } = props;
  const classes = useStyles();

  if (options.totalPrice < 50) {
    return null;
  }

  const savings =
    options.savings > 0
      ? `Save ${formatMoney(options.savings, 0)}/year!`
      : "Pay full price.";

  return (
    <Paper
      classes={{
        root: classes.paperRoot
      }}
      className={checked ? classes.checked : null}
      square
      elevation={0}
    >
      <div className={classes.container}>
        <Typography
          className={classes.choiceTitle}
          variant="body2"
          align="center"
        >
          {options.title}
        </Typography>
        <div className={classes.priceBox}>
          <Typography
            className={classes.perMonth}
            variant="body2"
            align="center"
          >
            {`${formatMoney(options.pricing, 0)}`}
            <span className={classes.small}>/mo</span>
          </Typography>
        </div>
        <Typography
          className={options.savings > 0 ? classes.savings : classes.fullPrice}
          variant="body2"
          align="center"
        >
          {savings}
        </Typography>
      </div>
    </Paper>
  );
};
