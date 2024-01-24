import React from "react";
import { Route ,Switch } from "react-router-dom";
import { AcctLayout, PrivateRoute } from "../../_components";
import { Treatments } from "./Treatments";
import { AcctInfo } from "./AcctInfo";
import { TreatmentMessages } from "./Messages";
import OrderHistory from "./History/OrderHistory";

export const AcctMain = () => {
  return (
    <>
      <AcctLayout>
        <OrderHistory/>
        <Switch>
          <PrivateRoute path="/account/home">
            <Treatments />
          </PrivateRoute>
          <PrivateRoute path="/account/info">
            <AcctInfo />
          </PrivateRoute>
          <PrivateRoute path="/account/messages">
            <TreatmentMessages />
          </PrivateRoute>
          <Route path="/history">
            <OrderHistory />
          </Route>
        </Switch>
      </AcctLayout>
    </>
  );
};
