import React from "react";
import { Field } from "react-final-form";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  validCardNumber,
  validCardExpiry,
  validCardCVC,
  formatMoney,
} from "../../../_helpers";
import { drugDisplaySetup } from "../../Shared/ProductInfo";
import { StandardPage, RenderStdTextField } from "../../../_components";
import { logReactGAEvent } from "../../../analytics";

const useStyles = makeStyles((theme) => ({
  payWith: {
    fontSize: 18,
    fontWeight: 500,
    marginTop: theme.spacing(2),
  },
  summaryContainer: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  treatment: {
    fontWeight: 500,
    marginBottom: theme.spacing(2),
  },
  infoBlock: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  priceLine: {
    display: "flex",
    justifyContent: "space-between",
  },
  due: {
    fontWeight: 600,
    fontSize: 18,
  },
  free: {
    fontWeight: 600,
    color: theme.palette.primary.main,
  },
  supply: {
    fontWeight: 300,
    fontSize: 12,
  },
  amount: {
    fontWeight: 600,
  },
  product: {
    fontWeight: 400,
  },
  chargeSummary: {
    marginTop: 0,
    marginBottom: theme.spacing(3),
  },
  disclaimer: {
    fontSize: 11,
    textAlign: "center",
    width: "64%",
    lineHeight: "15px",
    margin: "8px auto 0",
  },
}));

export const validatePaymentInfo = (values) => {
  const errors = { payment: {} };

  if (!values.payment.cardNumber) {
    errors.payment.cardNumber = "Card number is required";
  } else if (!validCardNumber(values.payment.cardNumber)) {
    errors.payment.cardNumber = "Card Number is not valid.";
  }

  if (!values.payment.cardExpiry) {
    errors.payment.cardExpiry = "Expiration Date is required";
  } else if (!validCardExpiry(values.payment.cardExpiry)) {
    errors.payment.cardExpiry = "Expiration Date is not valid.";
  }

  if (!values.payment.cardCVC) {
    errors.payment.cardCVC = "CVC is required";
  } else if (!validCardCVC(values.payment.cardCVC, values.payment.cardNumber)) {
    errors.payment.cardCVC = "CVC is not valid.";
  }

  return errors;
};

export const PaymentInfoPage = (props) => {
  const { values } = props;
  const classes = useStyles();

  const options = drugDisplaySetup(values.subscription);

  const name = options.display;
  const addonName = options.addOnDisplay;
  const amount = formatMoney(options.total);
  const visitAmount = 0;
  const buttonText = `PAY $${visitAmount} TODAY`;
  const supply = options.per + "nth supply";
  const interval = options.interval;
  logReactGAEvent({ category: `${values.type} visit`, action: "Made it to Payment Page" });

  return (
    <StandardPage questionText="Confirm Payment" buttonText={buttonText} {...props}>
      <Card className={classes.summaryContainer}>
        <div className={classes.treatment}>Your plan, if prescribed</div>
        <div className={classes.infoBlock}>
          <div className={classes.priceLine}>
            <div className={classes.product}>{name}</div>
            <div className={classes.amount}>{amount}</div>
          </div>
          {addonName ? <div className={classes.product}>{addonName}</div> : null}
          <div className={classes.supply}>{supply}</div>
        </div>
        <Divider />
        <div className={classes.infoBlock}>
          <div className={classes.priceLine}>
            <div>Online Doctor Visit</div>
            {visitAmount ? <div>${visitAmount}</div> : <div className={classes.free}>FREE</div>}
          </div>
        </div>
        <Divider />
        <div className={classes.infoBlock}>
          <div className={classes.priceLine}>
            <div className={classes.due}>Due Now</div>
            <div className={classes.due}>${visitAmount}</div>
          </div>
        </div>
      </Card>
      <div className={classes.payWith}>Pay with</div>
      <div>Credit or Debit Card</div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Field
            required
            component={RenderStdTextField}
            name="payment.cardNumber"
            label="Card Number"
            pattern="[\d| ]{16,22}"
            fullWidth
            format={formatCreditCardNumber}
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Field
            component={RenderStdTextField}
            required
            id="city"
            name="payment.cardExpiry"
            label="MM/DD"
            pattern="\d\d/\d\d"
            placeholder="Valid Thru"
            format={formatExpirationDate}
            fullWidth
            autoComplete="cc-exp"
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Field
            component={RenderStdTextField}
            required
            id="state"
            name="payment.cardCVC"
            pattern="\d{3,4}"
            format={formatCVC}
            label="CVC"
            autoComplete="cc-csc"
            fullWidth
          />
        </Grid>
        <Grid item className={classes.chargeSummary}>
          By clicking {buttonText} you agree that, if prescribed, you will be charged {amount} for your first shipment
          and {amount} every {interval} thereafter until you cancel your prescription or your prescription expires. You
          can cancel your plan anytime by logging into your account.
          <div className={classes.disclaimer}>
            A $1.00 temporary authorization by The Daily Dose Pharmacy may be placed in order to verify your card.
          </div>
        </Grid>
      </Grid>
    </StandardPage>
  );
};
