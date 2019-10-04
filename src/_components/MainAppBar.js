import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import withWidth from "@material-ui/core/withWidth";
import IconButton from "@material-ui/core/IconButton";
import Help from "@material-ui/icons/Help";
import bigLogo from "../_images/select-logo-new.svg";

const styles = () => ({
  fixed: {
    display: "flex",
    padding: "0 25px",
    height: 60
  },
  grow: {
    flexGrow: 1
  },
  biglogo: {
    width: 120,
    height: 45,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  },
  centerBar: {
    flexGrow: 1
  },
  leftBar: {
    width: 40
  },
  rightBar: {
    width: 40
  }
});

let MainAppBar = props => {
  const { classes } = props;
  return (
    <AppBar
      position="fixed"
      color="default"
      classes={{ positionFixed: classes.fixed }}
    >
      <Toolbar>
        <div className={classes.leftBar} />
        <div className={classes.centerBar}>
          <img src={bigLogo} alt="vs-big-logo" className={classes.biglogo} />
        </div>
        <div className={classes.rightBar}>
          <IconButton
            className={classes.helpButton}
            color="primary"
            aria-label="Help"
          >
            <Help />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

MainAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string
};

export { MainAppBar };
