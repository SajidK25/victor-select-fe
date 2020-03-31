import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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
        Thank you!
      </Typography>
      <div>
        <Typography align="center">{`Your online visit will be forwarded to your physician and you'll receive a response soon. Usually within 24 hours.`}</Typography>
      </div>
      <Typography align="center" variant="h6" gutterBottom>
        Thank you!
      </Typography>
    </div>
  );
}
