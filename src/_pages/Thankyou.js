import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "0 auto",
    width: 500,
    maxWidth: "100%",
    minHeight: "100%",
    padding: "50px 0 35px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      padding: "25px 15px",
    },
  },
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: "700",
  },
  title: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: 12,
  },
}));

export function Thankyou() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography align="center" variant="h6" gutterBottom>
        Thank you!
      </Typography>
      <div>
        <Typography align="center">{``}</Typography>
      </div>
      <Button
        size="small"
        color="primary"
        className={classes.button}
        href={`https://victoryselect.com`}
      >
        Return to VictorySelect.com
      </Button>
    </div>
  );
}
