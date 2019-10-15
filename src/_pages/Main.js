import React from "react";
import {
  withRouter,
  Route,
  Switch,
  useParams,
  useLocation
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Signin } from "../_pages/signin";
import { LoginPage } from "../Questionaire/Pages/Shared/LoginPage";
import { Questionaire } from "../Questionaire";
import { CreateAccountPage } from "../Questionaire/Pages/Shared/CreateAccountPage";
import { edQuestionaire } from "../Questionaire/ED/questionPaths";
import { sleepQuestionaire } from "../Questionaire/Sleep/questionPaths";
import { hairQuestionaire } from "../Questionaire/Hair/questionPaths";
import Callback from "./callback";

const useStyles = makeStyles({
  app: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});

const Main = props => {
  const classes = useStyles();
  const p = useParams();
  const location = useLocation();

  console.log("Params:", p);
  console.log("Location:", location);

  return (
    <div className={classes.app}>
      <Switch>
        <Route path="/signin" render={() => <Signin to="/account" />} />
        <Route path="/signin" render={() => <Signin to="/account" />} />
        <Route path={`/visitStart/:id`}>
          <CreateAccountPage />
        </Route>
        <Route path={`/Login/:id`}>
          <LoginPage />
        </Route>
        <Route path={"/visit/:id"}>
          <Questionaire />
        </Route>
        <Route path="/callback" component={Callback} />
      </Switch>
    </div>
  );
};

const connectedMain = withRouter(Main);
export { connectedMain as Main };
