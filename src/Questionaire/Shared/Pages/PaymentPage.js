import React, { useEffect, useState } from "react";
import { useApolloClient } from "@apollo/react-hooks";
import { Field } from "react-final-form";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  validCardNumber,
  validCardExpiry,
  validCardCVC,
  formatMoney,
  normalizeDiscountCode,
  getDiscount,
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
  totalBlock: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(2),
  },
  discountBlock: {
    marginTop: 0,
    marginBottom: 0,
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

const verifyDiscountCode = async (values, client) => {
  if (values.subscription.discountCode) {
    const discount = await getDiscount(values.subscription.discountCode, client);
    if (discount) {
      values.subscription.discountPercent = discount.percent;
      values.subscription.discountAmount = discount.amount;
    } else {
      values.subscription.discountCode = "";
      values.subscription.discountPercent = 0;
      values.subscription.discountAmount = 0;
    }
  }
};

export const validatePaymentInfo = async (values) => {
  const errors = { payment: {}, subscription: {} };

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
  const client = useApolloClient();
  const [loading, setLoading] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    logReactGAEvent({ category: `${values.type} visit`, action: "Made it to Payment Page" });

    return () => {};
  }, [values.type]);

  const options = drugDisplaySetup(values.subscription);

  const name = options.display;
  const addonName = options.addOnDisplay;
  const amount = formatMoney(options.total);
  const visitAmount = 0;
  const buttonText = `PAY $${visitAmount} TODAY`;
  const supply = options.per + "nth supply";
  const interval = options.interval;
  let discountAmount = values.subscription.discountAmount;
  if (values.subscription.discountPercent > 0) {
    discountAmount = options.total * values.subscription.discountPercent;
  }

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
        {discountAmount > 0 && (
          <>
            <div className={classes.discountBlock}>
              <div className={classes.priceLine}>
                <div className={classes.product}>Discount</div>
                <div className={classes.free}>
                  -{}
                  {formatMoney(discountAmount)}
                </div>
              </div>
            </div>
            <div className={classes.totalBlock}>
              <div className={classes.priceLine}>
                <div className={classes.due}>Total (first shipment)</div>
                <div className={classes.due}>{formatMoney(options.total - discountAmount)}</div>
              </div>
            </div>
          </>
        )}
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
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6}>
          <Field
            component={RenderStdTextField}
            name="subscription.discountCode"
            parse={normalizeDiscountCode}
            label="Discount Code"
            id="code"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <Button
            disabled={values.subscription.discountCode === ""}
            variant="outlined"
            color="primary"
            onClick={async () => {
              setLoading(true);
              await verifyDiscountCode(values, client);
              document.getElementById("code").focus();
              setLoading(false);
            }}
          >
            Apply Discount
          </Button>
        </Grid>
      </Grid>
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
          By clicking <b>{buttonText}</b> you agree that, if prescribed, you will be charged{" "}
          <b>{formatMoney(options.total - discountAmount)}</b> for your first shipment and <b>{amount}</b> {interval}{" "}
          thereafter until you cancel your prescription or your prescription expires. You can cancel your plan anytime
          by logging into your account.
          <div className={classes.disclaimer}>
            A $1.00 temporary authorization by The Daily Dose Pharmacy may be placed in order to verify your card.
          </div>
        </Grid>
      </Grid>
    </StandardPage>
  );
};
