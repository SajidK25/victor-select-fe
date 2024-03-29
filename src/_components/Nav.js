import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Help from "@material-ui/icons/Help";
import Button from "@material-ui/core/Button";
import { Logout } from "./Logout";
import User from "./User";

const useStyles = makeStyles(theme => ({
  signinButton: {
    marginTop: 0,
    textAlign: "center",
    fontSize: 15,
    padding: 0,
    paddingRight: 12
  },
  icon: {
    marginLeft: theme.spacing(1),
    fontSize: 16,
    marginRight: 4
  },
  button: {
    marginTop: 0,
    textAlign: "center",
    fontSize: 14,
    padding: "0px 4px",
    marginRight: 4
  },
  navButtons: {
    display: "flex"
    // display: "block"
  }
}));

export const Nav = ({ props }) => {
  const classes = useStyles();

  return (
    <div className={classes.navButtons}>
      <User>
        {({ data }) =>
          data && data.me ? (
            <>
              <Button
                variant="button"
                color="primary"
                align="center"
                component={Link}
                to="/messages"
              >
                Messages
              </Button>
              <Button
                variant="button"
                color="primary"
                align="center"
                component={Link}
                to="/account"
              >
                Account
              </Button>
              <Logout />
            </>
          ) : (
            <Button
              variant="outlined"
              color="primary"
              align="center"
              component={Link}
              to="/signin"
            >
              Login
            </Button>
          )
        }
      </User>

      <IconButton
        className={classes.helpButton}
        color="primary"
        aria-label="Help"
      >
        <Help />
      </IconButton>
    </div>
  );
};
