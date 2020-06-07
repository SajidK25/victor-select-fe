import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { PlanDisplay } from "./PlanDisplay";
import { getPricing } from "../_util";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    margin: 0,
  },
  termsWrapper: {
    margin: "24px 0",
  },
  termsInfo: {
    padding: "8px 0",
  },
  planHeader: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 0 5px",
  },
  headerName: {
    fontSize: 18,
    fontWeight: 500,
  },
  headerPrice: {
    display: "flex",
    justifyContent: "flex-end",
    fontSize: 14,
    fontWeight: 300,
  },
  discountTotal: {
    color: theme.palette.primary.main,
    fontSize: 16,
    margin: "0 3px",
    fontWeight: 600,
  },
  noDiscountTotal: {
    fontSize: 16,
    textDecoration: "line-through",
    color: "grey",
    fontWeight: 600,
    margin: "0 3px",
  },
  perMonth: {
    fontSize: 14,
    fontWeight: 300,
  },
  costDescription: {
    fontSize: 12,
    lineHeight: "18px",
  },
  monthly: {
    fontSize: 16,
    fontWeight: 400,
  },
  totalSection: {
    marginTop: 30,
    borderTop: "2px solid rgba(0, 0, 0, 0.2)",
    borderBottom: "2px solid rgba(0, 0, 0, 0.2)",
    padding: "20px 0",
    display: "flex",
    justifyContent: "space-between",
  },
  totalTitle: {
    fontSize: 20,
    fontWeight: 600,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 600,
  },
}));

const DisplayTerms = (props) => {
  const { value, product } = props;
  const classes = useStyles();
  const pricing = getPricing(product, value);

  return (
    <div className={classes.termsWrapper}>
      <div className={classes.termsInfo}>
        <div className={classes.planHeader}>
          <div className={classes.headerName}>{pricing.planName}</div>
          <div className={classes.headerPrice}>
            {value === "1" ? (
              <>
                <div className={classes.monthly}>{pricing.amountDue}</div>
                <div className={classes.perMonth}>/mo</div>
              </>
            ) : (
              <>
                <div className={classes.discountTotal}>{pricing.amountDue}</div>
                <div className={classes.noDiscountTotal}>
                  {pricing.amountNoDiscount}
                </div>
                <div className={classes.perMonth}>/{value} mo</div>
              </>
            )}
          </div>
        </div>
        <div className={classes.costDescription}>
          You will be billed {pricing.amountDue} and your products shipped{" "}
          {pricing.interval}. In each delivery you will receive a{" "}
          {pricing.receive} supply. You may cancel or modify your plan whenever
          you wish.
        </div>
        <div className={classes.totalSection}>
          <div className={classes.totalTitle}>Total</div>
          <div className={classes.totalAmount}>{pricing.amountDue}</div>
        </div>
      </div>
    </div>
  );
};

export const PlansDisplay = (props) => {
  const { product, input } = props;
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <PlanDisplay product={product} option={"3"} input={input} />
        <PlanDisplay product={product} option={"2"} input={input} />
        <PlanDisplay product={product} option={"1"} input={input} />
      </div>
      {input.value ? (
        <DisplayTerms product={product} value={input.value} />
      ) : null}
    </div>
  );
};
