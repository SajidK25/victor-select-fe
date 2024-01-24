import React from "react";
import { AcctNav, AcctHeader } from "./";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  acctApp: {
    height: "100%",
    overflow: "auto",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
  },
  appContent: {
    backgroundColor: "#FAFAFA",
    flex: 1,
    [theme.breakpoints.up(1280)]: {
      paddingTop: 60,
    },
    [theme.breakpoints.down(1279)]: {
      paddingTop: 110,
    },
  },
  appContentInner: {
    padding: "0 13px",
    width: 1000,
    maxWidth: "100%",
    margin: "0 26%",
  },
  appMain: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    background: "rgb(255,255,255)",
  },
  app: {
    display: "block",
  },
}));

export const AcctLayout = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <AcctNav {...props} />
      <div className={classes.acctApp}>
        <div className={classes.appMain}>
          <AcctHeader />
          <div className={classes.appContent}>
            <div className={classes.appContentInner}>{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
