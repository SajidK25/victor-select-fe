import React from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Review, Login } from "./";
import { PrivateRoute } from "../_components";
import { CreateAccountPage } from "../Questionaire/Shared/Pages";
import { Questionaire } from "../Questionaire";
import {
  UpdateCreditCard,
  UpdateAddress,
  UpdateEmail,
  UpdatePassword
} from "./Account/AcctInfo";
import { AcctMain } from "./Account";

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
        <PrivateRoute path="/account/:id">
          <AcctMain />
        </PrivateRoute>
        <PrivateRoute path="/update-creditcard">
          <UpdateCreditCard />
        </PrivateRoute>
        <PrivateRoute path="/update-address">
          <UpdateAddress />
        </PrivateRoute>
        <PrivateRoute path="/update-password">
          <UpdatePassword />
        </PrivateRoute>
        <PrivateRoute path="/update-email">
          <UpdateEmail />
        </PrivateRoute>
        <Route path="/confirmation">
          <Review />
        </Route>
        <Route path={`/visitStart/:id`}>
          <CreateAccountPage />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path={`/Login/:id`}>
          <Login />
        </Route>
        <Route path={"/visit/:id"}>
          <Questionaire />
        </Route>
      </Switch>
    </div>
  );
};
