import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { formatMoney } from "../../../_helpers";

const useStyles = makeStyles(theme => ({
  container: {
    margin: 0,
    padding: 0
  },
  paperRoot: {
    margin: 0,
    paddingLeft: 4,
    paddingRight: 4
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    marginTop: 4
  },
  subTitle: {
    fontSize: 13,
    fontWeight: 500,
    marginTop: 8
  },
  moreText: {
    fontSize: 12,
    fontWeight: 300
  },
  priceLine: {
    marginTop: 16,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  priceBox: {
    display: "flex",
    alignSelf: "flex-end"
  },
  perMultiMonth: {
    fontSize: 24,
    color: theme.palette.primary.main,
    fontWeight: 600
  },
  perMonth: {
    fontSize: 24,
    fontWeight: 400
  },
  savings: {
    display: "flex",
    alignSelf: "flex-end",
    color: theme.palette.primary.main,
    fontSize: 16,
    fontWeight: 500
  },
  fullPrice: {
    display: "flex",
    alignSelf: "flex-end",
    fontWeight: 400
  },
  small: {
    fontSize: 12,
    fontWeight: 400,
    color: theme.palette.text.primary
  }
}));

export const HairIntervalDisplay = props => {
  const { options } = props;
  const classes = useStyles();

  const savings =
    options.savings > 0
      ? `Save ${formatMoney(options.savings, 0)}/year!`
      : "Pay full price.";

  return (
    <Paper
      classes={{
        root: classes.paperRoot
      }}
      square
      elevation={0}
    >
      <div className={classes.container}>
        <Typography className={classes.title} variant="body2">
          {options.title}
        </Typography>
        <Typography className={classes.subTitle}>{options.subTitle}</Typography>
        <Typography className={classes.moreText}>{options.moreText}</Typography>
        <div className={classes.priceLine}>
          <div className={classes.priceBox}>
            <Typography
              className={
                options.savings > 0 ? classes.perMultiMonth : classes.perMonth
              }
              variant="body2"
            >
              {`${formatMoney(options.pricing, 2)}`}
              <span className={classes.small}>/mo</span>
            </Typography>
          </div>
          <Typography
            className={
              options.savings > 0 ? classes.savings : classes.fullPrice
            }
            variant="body2"
          >
            {savings}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};
