import React from "react";
import { useParams, useLocation, Switch } from "react-router-dom";
import { AcctLayout, PrivateRoute } from "../../_components";
import { Treatments } from "./Treatments";
import { AcctInfo } from "./AcctInfo";
import { TreatmentMessages } from "./Messages";

export const AcctMain = () => {
  const params = useParams();
  const location = useLocation();

  console.log("Params", params);
  console.log("Location", location);

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
