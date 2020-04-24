import React from "react";
import { QHeader, ErrorMessage } from "../_components";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  appContainer: {
    overflowY: "auto",
    paddingTop: 70,
  },
});

export const QuestionaireLayout = (props) => {
  const classes = useStyles();
  const { error } = props;
  return (
    <>
      <QHeader {...props} />
      <div className={classes.appContainer}>
        <ErrorMessage error={error} />
        {props.children}
      </div>
    </>
  );
};
