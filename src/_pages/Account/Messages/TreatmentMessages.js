import React from "react";


export const TreatmentMessages() {
    const history = useHistory();
    const [sorting, setSorting] = useState(false);
  
    const { data, loading, error } = useQuery(PATIENT_PRESCRIPTIONS);
      
    const classes = useStyles();
  
    if (loading) return <Loading />;
    if (error) return <ErrorMessage error={error} />;
    if (sorting) return <p>Sorting Results</p>;
    if (!data) return <p>No new visits</p>;
  
    console.log("Data:", data);
  
    return (
      <div className={classes.container}>
        {data.getPatientPrescriptions.map((p) => (
          <ShowTreatment key={p.id} prescription={p} />
        ))}
      </div>
    );  
    
}
