import React from "react";
import { Field } from "react-final-form";
import RadioGroup from "@material-ui/core/RadioGroup";
import { makeStyles } from "@material-ui/core/styles";
import { PlansDisplay } from "../components";

export const ProductPage = (props) => {
  const { product } = props;

  return (
    <div>
      <div>{product.name}</div>
      <div>{product.description}</div>
      <Field
        component={PlansDisplay}
        product={product}
        name="planChoice"
        type="div"
      />
    </div>
  );
};
