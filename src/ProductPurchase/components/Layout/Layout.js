import React from "react";
import { useLocation } from "react-router-dom";
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
    maxWidth: 375,
    minWidth: 330,
    margin: "20px auto 0",
  },
}));

export const Layout = (props) => {
  const { children, handleClick } = props;
  const location = useLocation();
  const classes = useStyles();

  const p = location.pathname.split("/");

  let section = "product";
  if (p.length > 3) {
    section = p[3];
  }

  return (
    <div className={classes.app}>
      <Heading section={section} />
      <Breadcrumbs section={section} handleClick={handleClick} />
      <div className={classes.appContent}>
        <div className={classes.overlay}>
          <div className={classes.form}>{children}</div>
        </div>
      </div>
    </div>
  );
};
