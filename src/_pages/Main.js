import React from "react";
import { Route, Switch, useParams, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Signin } from "../_pages/signin";
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

export const Main = props => {
  const classes = useStyles();
  const p = useParams();
  const location = useLocation();

  return (
    <div className={classes.app}>
      <Switch>
        <Route path="/signin">
          <Signin to="/account" />
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
