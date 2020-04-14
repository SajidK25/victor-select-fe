import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import { StandardPage } from "../../../_components";

import { drugDisplaySetup } from "../ProductInfo";
import { formatMoney } from "../../../_helpers/money";

const useStyles = makeStyles(theme => ({
  pricingBox: {
    padding: theme.spacing(2)
  },
  treatment: {
    fontSize: 15,
    fontWeight: 500
  },
  treatmentContainer: {
    paddingLeft: theme.spacing(1)
  },
  drugDisplay: {
    fontSize: 18,
    fontWeight: 400,
    marginTop: 8,
    marginBottom: 0
  },
  drugDoses: {},
  drugDelivery: {
    fontWeight: 300,
    fontSize: 13,
    marginTop: theme.spacing(1)
  },
  drugPrice: {},
  drugMoney: {
    fontWeight: 500
  },
  noCharge: {
    marginTop: 20,
    marginBottom: 0,
    textAlign: "center",
    fontSize: 13
  }
}));

const validateSummary = () => {
  const errors = {};

  return errors;
};

const SummaryPage = props => {
  const { values } = props;

  const classes = useStyles();

  const displayOptions = drugDisplaySetup(values.subscription);
  console.log("displayOptions:", displayOptions);

  return (
    <StandardPage
      questionText="Your Selections"
      additionalText="Please see your selections below."
      {...props}
    >
      <Paper className={classes.pricingBox}>
        <div className={classes.treatment}>Treatment Preference</div>
        <Divider />
        <div className={classes.treatmentContainer}>
          <div className={classes.drugDisplay}>{displayOptions.display}</div>

          {displayOptions.addOnDisplay ? (
            <>
              <div className={classes.drugDisplay}>
                {displayOptions.addOnDisplay}
              </div>
              <div className={classes.drugDoses}>
                {`${displayOptions.addOnMonthlyDoses}x per month`}
              </div>
            </>
          ) : null}

          <div className={classes.drugDelivery}>{displayOptions.title}</div>
          <div className={classes.drugPrice}>
            <span className={classes.drugMoney}>
              {formatMoney(displayOptions.total, 2)}
            </span>
            {` ${displayOptions.interval}`}
          </div>
        </div>
        <div className={classes.noCharge}>
          You won&apos;t be charged for your medication yet.
        </div>
      </Paper>
    </StandardPage>
  );
};

export { SummaryPage, validateSummary };
