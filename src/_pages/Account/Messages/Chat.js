import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { EnterMessage, ShowMessages } from "./";

import { UpdateLayout } from "../../../_components";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    flex: "1 1 0",
    overflow: "auto",
  },
  entry: {
    marginTop: 4,
    width: "100%",
  },
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "column",
  },
  sectionContainer: {
    display: "flex",
    flexWrap: "nowrap",
    padding: "6px 2px",
    height: "calc(90vh - 80px)",
    flexDirection: "column",
  },
}));

export const Chat = () => {
  const { id } = useParams();
  const classes = useStyles();
  const history = useHistory();

  const handleExit = () => {
    history.push("/account/messages");
  };

  return (
    <UpdateLayout handleExit={handleExit} headerText="ED">
      <div className={classes.sectionContainer}>
        <div className={classes.container}>
          <Paper className={classes.paper}>
            <ShowMessages prescriptionId={id} />
          </Paper>
          <Paper className={classes.entry}>
            <EnterMessage prescriptionId={id} />
          </Paper>
        </div>
      </div>
    </UpdateLayout>
  );
};
