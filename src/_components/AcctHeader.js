import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import bigLogo from "../_images/select-logo-new.svg";

const useStyles = makeStyles(theme => ({
  header: {
    position: "absolute",
    zIndex: 10,
    top: 0,
    right: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    [theme.breakpoints.down(1280)]: {
      backgroundColor: "rgb(255,255,255)"
    }
  },
  logoContainer: {
    display: "none",
    [theme.breakpoints.down(1280)]: {
      display: "block",
      position: "absolute",
      marginTop: 16,
      left: "50%",
      transform: "translateX(-50%)"
    }
  },
  logo: {
    display: "block",
    width: 80,
    margin: "0 0 10px",
    maxWidth: "100%",
    height: "auto"
  }
}));

export const AcctHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.logoContainer}>
        <img src={bigLogo} alt="vs-big-logo" className={classes.logo} />
      </div>
    </div>
  );
};
