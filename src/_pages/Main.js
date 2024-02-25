import React from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Review, Login, ComingSoon, Thankyou, RequestReset, Reset } from "./";
import { PrivateRoute } from "../_components";
import { CreateAccountPage } from "../Questionaire/Shared/Pages";
import { Questionaire } from "../Questionaire";
import { Product } from "../ProductPurchase/Product";
import {
  UpdateCreditCard,
  UpdateAddress,
  UpdateEmail,
  UpdatePassword,
} from "./Account/AcctInfo";
import { Chat } from "./Account/Messages";
import { AcctMain } from "./Account";
import RXRender from "../_components/RXRender";

const useStyles = makeStyles({
  app: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Switch>
        <PrivateRoute path="/account">
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
        <PrivateRoute path="/chat/:id">
          <Chat />
        </PrivateRoute>
        <Route path="/confirmation">
          <Review />
        </Route>
        <Route path="/thankyou">
          <Thankyou />
        </Route>
        <Route path={`/visitStart/:id`}>
          <CreateAccountPage />
          <RXRender />
        </Route>
        <Route path={`/comingsoon/:id`}>
          <ComingSoon />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path={`/Login/:id`}>
          <Login />
        </Route>
        <Route path="/request-reset">
          <RequestReset />
        </Route>
        <Route path="/reset/:resetToken">
          <Reset />
        </Route>
        <Route path={`/visit/:id`}>
          <Questionaire />
        </Route>
        <Route path={`/product/:id`}>
          <Product />
        </Route>
      </Switch>
    </div>
  );
};
