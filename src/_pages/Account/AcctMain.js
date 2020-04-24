import React from "react";
import { Switch } from "react-router-dom";
import { AcctLayout, PrivateRoute } from "../../_components";
import { Treatments } from "./Treatments";
import { AcctInfo } from "./AcctInfo";
import { TreatmentMessages } from "./Messages";

export const AcctMain = () => {
  return (
    <>
      <AcctLayout>
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
        </Switch>
      </AcctLayout>
    </>
  );
};
