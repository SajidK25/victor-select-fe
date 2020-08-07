import React from "react";
import { Field } from "react-final-form";
import { makeStyles } from "@material-ui/core/styles";
import { PlansDisplay, SubmitButton } from "../components";
import { logReactGAEvent } from "../../analytics";

const useStyles = makeStyles(() => ({
  name: {
    margin: "0 0 10px",
    fontWeight: 500,
    fontSize: 26,
    lineHeight: "32px",
  },
  description: {
    fontSize: 14,
  },
  form: {
    paddingTop: 20,
  },
  page: {
    marginTop: 35,
  },
}));

export const validateProduct = async () => {
  return {};
};

export const ProductPage = ({ product }) => {
  const classes = useStyles();
  logReactGAEvent({ category: `Product: ${product.name}`, action: `Looking at intro` });

  return (
    <div className={classes.page}>
      <div>
        <div className={classes.name}>{product.name}</div>
        <div className={classes.description}>{product.description}</div>
      </div>
      <div className={classes.form}>
        <Field component={PlansDisplay} product={product} name="subscription.shippingInterval" type="div" />
      </div>
      <SubmitButton />
    </div>
  );
};
