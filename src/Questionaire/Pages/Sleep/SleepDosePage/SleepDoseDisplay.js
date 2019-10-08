import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { formatMoney } from "../../../../_helpers/money";

const useStyles = makeStyles(theme => ({
  container: {
    margin: 0,
    paddingLeft: 8,
    paddingRight: 8
  },
  titleLine: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
    marginTop: 0,
    marginBottom: theme.spacing(0.5)
  },
  subTitle: {
    fontSize: 14,
    fontWeight: 300
  },
  priceBox: {
    display: "flex",
    alignSelf: "flex-start"
  },
  price: {
    fontSize: 18,
    fontWeight: 600,
    color: theme.palette.primary.main
  },
  dose: {
    fontSize: 11,
    fontWeight: 300,
    alignSelf: "center",
    marginLeft: 4,
    marginTop: 4
  },
  description: {
    fontSize: 14,
    fontWeight: 300,
    marginTop: 0
  },
  checked: {
    borderStyle: "solid",
    borderColor: theme.palette.primary.main,
    borderWidth: 1
  }
}));

export const SleepDoseDisplay = props => {
  const { options, pricing } = props;
  const classes = useStyles();
  console.log("Dose Options", options);

  return (
    <div className={classes.container}>
      <div className={classes.titleLine}>
        <Typography className={classes.title}>{options.label}</Typography>
        <div className={classes.priceBox}>
          <Typography className={classes.price}>
            {formatMoney(pricing.monthly, 2)}
          </Typography>
          <Typography className={classes.dose}>per month</Typography>
        </div>
      </div>
      <Typography className={classes.subTitle}>{options.display}</Typography>
    </div>
  );
};
