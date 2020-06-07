import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { PreviousButton } from "../../../_components";

const useStyles = makeStyles(() => ({
  breadCrumbs: {
    position: "fixed",
    backgroundColor: "#FFFFFF",
    top: 60,
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
    boxShadow: "0 3px 4px 0 rgba(0, 0, 0, 0.2)",
    width: "100%",
    height: 53,
  },
  list: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    padding: 0,
    height: 53,
  },
  button: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  listItem: {
    display: "block",
    position: "relative",
    padding: "0 8px",
  },
  hiliteItem: {
    display: "block",
    position: "relative",
    padding: "0 8px",
    fontWeight: 500,
  },
}));

export const Breadcrumbs = (props) => {
  const { section, handleClick } = props;
  const classes = useStyles();

  return (
    <div className={classes.breadCrumbs}>
      {section !== "product" ? (
        <div className={classes.button}>
          <PreviousButton handleClick={handleClick} />
        </div>
      ) : null}
      <ul className={classes.list}>
        <li
          className={
            section === "product" ? classes.hiliteItem : classes.listItem
          }
        >
          Product
        </li>
        {` > `}
        <li
          className={
            section === "account" ? classes.hiliteItem : classes.listItem
          }
        >
          Account
        </li>
        {` > `}
        <li
          className={
            section === "checkout" ? classes.hiliteItem : classes.listItem
          }
        >
          Checkout
        </li>
      </ul>
    </div>
  );
};
