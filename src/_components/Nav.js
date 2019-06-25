import React from "react";
import { Link } from "react-router-dom";
import { Mutation } from "react-apollo";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Help from "@material-ui/icons/Help";
import Button from "@material-ui/core/Button";
import LockIcon from "@material-ui/icons/Lock";

// import { TOGGLE_DOCUMENT_MUTATION } from './Document'
import User from "./User";
import Signout from "./Signout";

const styles = theme => ({
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
    display: "block"
  }
});

const Nav = ({ classes }) => (
  <User>
    {({ data: { me } }) => (
      <div className={classes.navButtons}>
        {me && (
          <>
            <Button
              variant="outlined"
              color="primary"
              align="center"
              className={classes.button}
              component={Link}
              to="/messages"
            >
              Messages
            </Button>
            <Button
              variant="outlined"
              color="primary"
              align="center"
              className={classes.button}
              component={Link}
              to="/account"
            >
              Account
            </Button>
            <Signout />
          </>
        )}
        {!me && (
          <Button
            variant="outlined"
            color="primary"
            align="center"
            className={classes.signinButton}
            component={Link}
            to="/signin"
          >
            <LockIcon className={classes.icon} />
            Sign In
          </Button>
        )}
        <IconButton
          className={classes.helpButton}
          color="primary"
          aria-label="Help"
        >
          <Help />
        </IconButton>
      </div>
    )}
  </User>
);

export default withStyles(styles)(Nav);
