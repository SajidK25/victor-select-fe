import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    margin: 0,
    paddingLeft: 8,
    paddingRight: 8
  },
  image: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    height: 110
  }
}));

export const HairLossWhereDisplay = props => {
  const { options, option } = props;
  const classes = useStyles();
  const imageName = require(`../../../images/HairLoss-${
    option === "female" ? "Female" : "Male"
  }-${options.id}.png`);
  return (
    <div className={classes.container}>
      <img className={classes.image} src={imageName} alt="hair guy" />
    </div>
  );
};
