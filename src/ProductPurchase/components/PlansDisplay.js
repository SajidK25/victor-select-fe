import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { PlanDisplay } from "./PlanDisplay";

const useStyles = makeStyles({
  container: {
    display: "flex",
    margin: 0,
  },
});

export const PlansDisplay = (props) => {
  const { product, input } = props;
  const classes = useStyles();
  console.log("Props", props);

  return (
    <div className={classes.container}>
      <PlanDisplay product={product} option={"3"} input={input} />
      <PlanDisplay product={product} option={"2"} input={input} />
      <PlanDisplay product={product} option={"1"} input={input} />
    </div>
  );
};
