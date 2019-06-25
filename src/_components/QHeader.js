import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Help from "@material-ui/icons/Help";
import bigLogo from "../images/select-logo-new.svg";
import { PrevButton } from "./ButtonGroup";

const useStyles = makeStyles({
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
  leftBar: {},
  rightBar: {}
});

export const QHeader = props => {
  const { handlePrevious, page, values } = props;
  const classes = useStyles();

  return (
    <AppBar position="absolute" color="default">
      <Toolbar disableGutters={true}>
        <div className={classes.leftBar}>
          {page > 0 && (
            <PrevButton handleClick={() => handlePrevious(values)} />
          )}
        </div>
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

QHeader.propTypes = {
  handlePrevious: PropTypes.func,
  page: PropTypes.number.isRequired
};
