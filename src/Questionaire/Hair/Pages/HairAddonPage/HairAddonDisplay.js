import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { formatMoney } from "../../../../_helpers";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: 0,
    paddingLeft: 8,
    paddingRight: 8,
  },
  titleLine: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
    marginTop: 0,
    marginBottom: theme.spacing(0.5),
  },
  priceLine: {
    marginTop: 8,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalPrice: {
    fontWeight: 500,
    marginRight: 4,
  },
  priceBox: {
    display: "flex",
    alignSelf: "flex-start",
  },
  detailBox: {
    display: "flex",
    alignSelf: "flex-end",
    fontSize: 14,
    marginTop: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: 600,
    color: theme.palette.primary.main,
  },
  dose: {
    fontSize: 11,
    fontWeight: 300,
    alignSelf: "center",
    marginLeft: 4,
    marginTop: 4,
  },
  description: {
    fontSize: 14,
    fontWeight: 300,
    marginTop: 0,
  },
}));

const setPricing = (pricing, howOften) => {
  const options = {};
  switch (howOften) {
    case "everyThree":
      options.price = pricing.threeMonth;
      options.interval = "every 3 months";
      break;

    case "everyTwo":
      options.price = pricing.twoMonth;
      options.interval = "every 2 months";
      break;

    default:
    case "monthly":
      options.price = pricing.monthly;
      options.interval = "monthly";
      break;
  }

  return options;
};

export const HairAddonDisplay = (props) => {
  const { options, pricing, howOften } = props;
  const classes = useStyles();

  const pricingOptions = setPricing(pricing, howOften);

  return (
    <div className={classes.container}>
      {options.price ? (
        <div className={classes.titleLine}>
          <Typography className={classes.title}>{options.label}</Typography>
          <div className={classes.priceBox}>
            <Typography className={classes.price}>
              {formatMoney(pricingOptions.price, 2)}
            </Typography>
            <Typography className={classes.dose}>per month</Typography>
          </div>
        </div>
      ) : null}
      <Typography className={classes.description} variant="body2">
        {options.description}
      </Typography>
      {/*     {options.price ? (
        <div>
          <div className={classes.detailBox}>
            <span className={classes.totalPrice}>
              {formatMoney(pricingOptions.price, 2)}
            </span>
            {` for ${pricingOptions.doses} daily doses delivered ${
              pricingOptions.interval
            }`}
          </div>
        </div>
          ) : null} */}
    </div>
  );
};
