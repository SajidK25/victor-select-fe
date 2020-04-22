import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";
import { ErrorMessage, Loading } from "../../../_components";
import { ShowMessage } from "./";
import { PATIENT_CHAT } from "../../../Graphql";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  visitBox: {
    flex: 1,
  },
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "column",
  },
}));

export const ShowMessages = ({ prescriptionId }) => {
  const { data, loading, error } = useQuery(PATIENT_CHAT, {
    variables: { prescriptionId: prescriptionId },
    pollInterval: 2000,
    onCompleted: (data) => {
      //      if (data) {
      //        setSorting(true);
      //        data.pendingPrescriptions.sort(sortPrescriptions);
      //        console.log("Sorted:", data.pendingPrescriptions);
      //        setSorting(false);
      //      }
      console.log("On completed", data);
    },
  });
  const classes = useStyles();

  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  if (!data) return <p>No new visits</p>;

  console.log("Data:", data);

  return (
    <div className={classes.container}>
      {data.getPatientChat.map((m) => (
        <ShowMessage key={m.id} message={m} />
      ))}
    </div>
  );
};
