import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import bigLogo from "../_images/select-logo-new.svg";
import { HelpButton } from "./";
import { PreviousButton } from "./";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  biglogo: {
    width: 120,
    height: 45,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  centerBar: { width: 140 },
  leftBar: {
    display: "flex",
    flex: "1 1 auto",
    justifyContent: "flex-start",
  },
  rightBar: {
    display: "flex",
    flex: "1 1 auto",
    justifyContent: "flex-end",
  },
});

export const QHeader = (props) => {
  const { handlePrevious, page, values } = props;
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="default">
      <Toolbar disableGutters={true} className={classes.container}>
        <div className={classes.leftBar}>
          {page > 0 && <PreviousButton handleClick={() => handlePrevious(values)} />}
        </div>
        <div className={classes.centerBar}>
          <img src={bigLogo} alt="vs-big-logo" className={classes.biglogo} />
        </div>
        <div className={classes.rightBar}></div>
      </Toolbar>
    </AppBar>
  );
};

//{page > 0 && (
//  <PreviousButton handleClick={() => handlePrevious(values)} />
//)}

// <Nav />

QHeader.propTypes = {
  handlePrevious: PropTypes.func,
  page: PropTypes.number.isRequired,
};
