import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import bigLogo from "../../../_images/select-logo-new.svg";

const useStyles = makeStyles(() => ({
  heading: {
    height: 60,
    width: "100%",
    position: "fixed",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 20px",
    boxShadow: "rgba(0, 0, 0, 0.08) 0px 6px 14px",
  },
  logo: {
    position: "relative",
  },
  img: {
    display: "block",
    width: "auto",
    height: 42,
  },
}));

export const Heading = () => {
  const classes = useStyles();
  return (
    <header className={classes.heading}>
      <div className={classes.logo}>
        <img src={bigLogo} alt="vs-big-logo" className={classes.img} />
      </div>
    </header>
  );
};
