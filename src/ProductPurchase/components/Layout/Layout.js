import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Heading, Breadcrumbs } from "./";

const useStyles = makeStyles(() => ({
  app: {
    backgroundColor: "#FAFAFA",
    fontSize: 16,
    fontWeight: 300,
  },
  appContent: {
    paddingTop: 113,
  },
  overlay: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minHeight: "calc(100vh - 60px)",
    overflowY: "hidden",
  },
  form: {
    maxWidth: 600,
    minWidth: 330,
    margin: "20px auto 0",
  },
}));

export const Layout = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Heading />
      <Breadcrumbs />
      <div className={classes.appContent}>
        <div className={classes.overlay}>
          <div className={classes.form}>{children}</div>
        </div>
      </div>
    </div>
  );
};
