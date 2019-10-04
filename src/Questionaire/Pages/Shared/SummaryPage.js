/* eslint-disable import/order */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import { InfoPage, StandardHeading } from "../../../_components";

import { drugDisplaySetup } from "../../ED/edSelections";
import { formatMoney } from "../../../_helpers/money";

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: 28,
    fontWeight: 500,
    marginTop: 32,
    marginBottom: 12
  },
  subTitle: {
    fontSize: 15,
    marginBottom: theme.spacing(0.5)
  },
  drugDisplay: {
    fontSize: 22,
    fontWeight: 400,
    marginTop: 12,
    marginBottom: 8
  },
  drugDoses: {},
  drugDelivery: {},
  drugPrice: {},
  drugMoney: {
    fontWeight: 500
  },
  noCharge: {
    marginTop: 20,
    marginBottom: 16,
    textAlign: "center",
    fontSize: 13
  },
  outer: {
    display: "flex",
    minHeight: "100%",
    padding: "0 !important",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  },
  main: {
    flexShrink: 0,
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      paddingBottom: 40
    }
  },
  innerMain: {
    marginLeft: 20,
    padding: "10px 0 60px",
    width: "100%",
    maxWidth: 400,
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      padding: "0 24px",
      width: "100%",
      maxWidth: "unset"
    }
  },
  photo: {
    display: "flex",
    flexShrink: 0,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    width: "40%",
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  image: {
    margin: "50px 33px",
    maxWidth: "100%",
    width: 175,
    display: "block",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      margin: "10px auto 15px",
      maxWidth: 175
    }
  }
}));

const validateSummary = values => {
  const errors = {};

  return errors;
};

const SummaryPage = props => {
  const { values } = props;

  const classes = useStyles();

  const displayOptions = drugDisplaySetup(values.subscription);
  // const displayOptions = {
  //   display: "Romeo",
  //   monthlyDoses: 8,
  //   title: "6 Month Delivery",
  //   total: 768,
  //   doses: 48,
  //   per: "6 mo",
  //   interval: "every 6 months",
  //   noDiscount: 0
  // };

  return (
    <InfoPage {...props}>
      <StandardHeading
        questionText="Visit Summary"
        additionalText="Here is a reminder of your treatment options."
      />
      <Divider />
      <div className={classes.pricingBox}>
        <div className={classes.drugDisplay}>{displayOptions.display}</div>
        <div className={classes.drugDoses}>{`${
          displayOptions.monthlyDoses
        }x per month`}</div>
        <div className={classes.drugDelivery}>{displayOptions.title}</div>
        <div className={classes.drugPrice}>
          <span className={classes.drugMoney}>
            {formatMoney(displayOptions.total, 0)}
          </span>
          {` ${displayOptions.interval}`}
        </div>
        <div className={classes.noCharge}>
          You won't be charged for your medication yet.
        </div>
      </div>
    </InfoPage>
  );
};

export { SummaryPage, validateSummary };
