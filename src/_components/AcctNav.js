import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import bigLogo from "../_images/select-logo-new.svg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  navBar: {
    width: 275,
    height: "100%",
    [theme.breakpoints.down(1280)]: {
      height: 50,
      width: "100%",
      top: 60
    },
    backgroundColor: "rgb(255,255,255)",
    position: "absolute",
    zIndex: 2100
  },
  active: {
    borderBottomStyle: "solid",
    borderBottomWidth: 4,
    borderBottomColor: theme.palette.primary.main,
    color: "#2196f3 !important"
  },
  link: {
    [theme.breakpoints.down(1280)]: {
      textAlign: "center",
      display: "block",
      width: "100%"
    },
    display: "flex",
    height: 50,
    fontStyle: "normal",
    fontSize: 18,
    color: "rgb(110, 119, 127)",
    padding: "16px 0px",
    background: "rgb(255, 255, 255)",
    textDecoration: "none"
  },
  list: {
    [theme.breakpoints.down(1280)]: {
      justifyContent: "center",
      display: "flex",
      maxWidth: "100%",
      margin: "0px auto"
    },
    listStyleType: "none",
    padding: 0,
    margin: 0,
    overflow: "hidden"
  },
  item: {
    [theme.breakpoints.down(1280)]: {
      margin: 0,
      width: "100%"
    },
    width: 200,
    margin: "0px 0px 0px 40px"
  },
  header: {
    [theme.breakpoints.down(1280)]: {
      display: "none"
    },
    width: 280,
    display: "block"
  },
  logo: {
    position: "relative",
    left: 60,
    width: 120,
    padding: "48px 0px 32px"
  },
  spacer: {
    position: "relative",
    width: 200,
    left: 40,
    borderTop: "1px solid rgb(250, 250, 250)",
    padding: "0px 0px 24px"
  },
  title: {
    flexGrow: 1
  }
}));

const MenuItem = ({ to, label }) => {
  const classes = useStyles();
  return (
    <li className={classes.item}>
      <NavLink
        to={to}
        className={classes.link}
        activeClassName={classes.active}
      >
        {label}
      </NavLink>
    </li>
  );
};

const Navigation = () => {
  const classes = useStyles();

  return (
    <ul className={classes.list}>
      <MenuItem to="/account/home" label="Treatments" />
      <MenuItem to="/account/info" label="Account" />
      <MenuItem to="/account/messages" label="Messages" />
    </ul>
  );
};

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <img src={bigLogo} alt="vs-big-logo" className={classes.logo} />
      <div className={classes.spacer}></div>
    </div>
  );
};

export const AcctNav = () => {
  const classes = useStyles();

  return (
    <div className={classes.navBar}>
      <Header />
      <Navigation />
    </div>
  );
};
