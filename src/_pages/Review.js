import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  container: {
    margin: "0 auto",
    width: 500,
    maxWidth: "100%",
    minHeight: "100%",
    padding: "50px 0 35px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      padding: "25px 15px"
    }
  },
  listItem: {
    padding: theme.spacing(1, 0)
  },
  total: {
    fontWeight: "700"
  },
  title: {
    marginTop: theme.spacing(2)
  }
}));

export function Review() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography align="center" variant="h6" gutterBottom>
        Confirmation Screen
      </Typography>
      <div>
        <Typography align="center">(Temporary)</Typography>
      </div>
    </div>
  );
}
