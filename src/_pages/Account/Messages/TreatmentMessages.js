import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";
import { ErrorMessage, Loading } from "../../../_components";
import { ShowTreatment } from "./";
import { PATIENT_PRESCRIPTIONS } from "../../../Graphql";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
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
  heading: {
    fontSize: 20,
    fontWeight: 500,
    marginTop: 25,
    marginBottom: 20,
  },
}));

export const TreatmentMessages = () => {
  const { data, loading, error } = useQuery(PATIENT_PRESCRIPTIONS);

  const classes = useStyles();

  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  if (!data) return <p>No treatment plans</p>;

  console.log("Data:", data);

  return (
    <div className={classes.container}>
      <Typography className={classes.heading}>
        Messages from your Physician
      </Typography>
      {data.getPatientPrescriptions.map(
        (p) =>
          p.type !== "SUPPLEMENT" && (
            <ShowTreatment key={p.id} prescription={p} />
          )
      )}
    </div>
  );
};
