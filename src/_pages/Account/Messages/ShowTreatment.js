import React from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";
import { Loading, ErrorMessage } from "../../../_components";
import moment from "moment";
import { RECENT_PHYSICIAN_MESSAGE } from "../../../Graphql";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "100%",
    padding: theme.spacing(1),
    marginBottom: theme.spacing(0.25),
    color: theme.palette.text.primary,
    cursor: "pointer",
    "&:hover": {
      borderStyle: "solid",
      borderWidth: 0.5,
      borderColor: theme.palette.primary,
    },
  },
  mainContainer: {
    display: "block",
  },
  avatarItem: {
    flexBasis: "50%",
    [theme.breakpoints.down("sm")]: {
      flexBasis: "100%",
    },
  },
  nameItem: {
    flexBasis: "calc(40% - 58px)",
    lineHeight: "17px",
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      flexBasis: "calc(45% - 30px)",
    },
  },
  type: {
    display: "block",
    fontSize: 13,
    marginBottom: 12,
    fontWeight: 500,
  },
  doc: {
    display: "block",
    marginLeft: 16,
    fontSize: 18,
    marginBottom: 0,
    fontWeight: 500,
  },
  text: {
    marginLeft: 16,
    fontSize: 16,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  date: {
    marginLeft: 16,
    fontWeight: 300,
    fontSize: 13,
  },
  productContainer: {
    display: "flex",
    flexDirection: "row",
    flexBasis: "calc(66% - 58px)",
    [theme.breakpoints.down("sm")]: {
      flexBasis: "calc(40% - 30px)",
      flexDirection: "column",
    },
  },
  productItem: {
    flexBasis: "50%",
    [theme.breakpoints.down("sm")]: {
      flexBasis: "100%",
    },
  },
}));

export const ShowTreatment = (props) => {
  const { prescription } = props;
  const history = useHistory();
  const classes = useStyles();
  const { data, loading, error } = useQuery(RECENT_PHYSICIAN_MESSAGE, {
    variables: { prescriptionId: prescription.id },
  });

  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  let message = "Your physician will leave a message here once your request is reviewed";
  let date = "";
  let doc = "";
  if (data && data.getRecentPrescriptionMessage) {
    message = data.getRecentPrescriptionMessage.text;
    doc = "Dr. Franklin";
    date = moment(data.getRecentPrescriptionMessage.createdAt).fromNow();
  }

  if (message.includes("_WELCOME]")) {
    message = `Thank you for choosing Victory Select for your healthcare needs. I have reviewed the health history
        information you provided`;
  }

  return (
    <Paper
      className={classes.paper}
      onClick={() => {
        history.push("/chat/" + prescription.id);
      }}
    >
      <div className={classes.mainContainer}>
        <div className={classes.type}>{prescription.type}</div>
        {doc && <div className={classes.doc}>{doc}</div>}
        <div className={classes.text}>{message}</div>
        {date && <div className={classes.date}>{date}</div>}
      </div>
    </Paper>
  );
};
