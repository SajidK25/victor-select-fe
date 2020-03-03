import React from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Review } from "../_pages/Review";
import { LoginPage, CreateAccountPage } from "../Questionaire/Shared/Pages";
import { Questionaire } from "../Questionaire";

const useStyles = makeStyles({
  app: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});

export const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Switch>
        <Route path="/confirmation">
          <Review />
        </Route>
        <Route path={`/visitStart/:id`}>
          <CreateAccountPage />
        </Route>
        <Route path={`/Login/:id`}>
          <LoginPage />
        </Route>
        <Route path={"/visit/:id"}>
          <Questionaire />
        </Route>
      </Switch>
    </div>
  );
};
