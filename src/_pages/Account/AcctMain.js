import React from "react";
import { Route, Switch } from "react-router-dom";
import { AcctLayout, PrivateRoute } from "../../_components";
import { Treatments } from "./Treatments";
import { AcctInfo } from "./AcctInfo";
import { TreatmentMessages } from "./Messages";
import OrderHistory from "./History/OrderHistory";
import RXRender from "../../_components/RXRender";

export const AcctMain = () => {
  return (
    <>
      <AcctLayout>
        <Switch>
          <PrivateRoute exact path="/account">
            <RXRender/>
            <OrderHistory />
          </PrivateRoute>
          <PrivateRoute exact path="/account/home">
            <Treatments />
          </PrivateRoute>
          <PrivateRoute exact path="/account/info">
            <AcctInfo />
          </PrivateRoute>
          <PrivateRoute exact path="/account/messages">
            <TreatmentMessages />
          </PrivateRoute>
        </Switch>
      </AcctLayout>
    </>
  );
};
