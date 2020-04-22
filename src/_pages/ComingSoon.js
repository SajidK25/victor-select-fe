import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";
import { Field } from "react-final-form";
import Button from "@material-ui/core/Button";
import { UpdatePage, RenderStdTextField, ErrorMessage } from "../_components";
import bigLogo from "../_images/select-logo-new.svg";
import { ADDINTEREST } from "../Graphql";

const useStyles = makeStyles((theme) => ({
  heading: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    fontSize: 20,
    fontWeight: 500,
  },
  fieldContainer: {
    display: "block",
    margin: "8px auto",
    width: "75%",
    maxWidth: 275,
  },
  mainText: {
    width: "85%",
    margin: "12px auto",
    display: "block",
  },
  thanksText: {
    marginTop: 16,
    textAlign: "center",
    marginBottom: 16,
    fontSize: 18,
    fontWeight: 600,
    justifyContent: "center",
  },
  button: {
    marginTop: 12,
  },
  logo: {
    width: "35%",
    margin: "10px auto",
    display: "block",
  },
}));

const categories = [
  { type: "ED", category: "ED", url: "/ed/" },
  { type: "HAIR", category: "hair growth", url: "/hair-growth/" },
  { type: "ALLERGY", category: "allergy", url: "/allergy/" },
  { type: "JOY", category: "Joy", url: "/joy/" },
  { type: "SLEEP", category: "sleep", url: "/sleep/" },
];

export const ComingSoon = () => {
  const { id } = useParams();
  const [interestSaved, setInterestSaved] = useState(false);
  const classes = useStyles();

  let productLine = "VictorySelect";
  let url = "";
  const item = categories.find((c) => c.type === id);
  if (item) {
    productLine = item.category;
    url = item.url;
  }

  const initialValues = {
    email: "",
    password: "",
  };

  const [addInterest, { error: error }] = useMutation(ADDINTEREST);

  const validate = (values) => {
    console.log("Validate Values:", values);

    const errors = {};

    if (!values.email) {
      errors.email = "email address is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const Submit = async (values) => {
    try {
      const response = await addInterest({
        variables: {
          input: {
            email: values.email,
            category: id,
            note: "Requested update",
          },
        },
      });
      console.log(response);
      setInterestSaved(true);
    } catch (err) {
      console.log("Error", err);
    }
  };

  return (
    <UpdatePage
      headerText="Welcome!"
      buttonText="Notify Me!"
      disableButton={interestSaved}
      initialValues={initialValues}
      validate={validate}
      onSubmit={Submit}
    >
      <img src={bigLogo} alt="vs-big-logo" className={classes.logo} />
      {!interestSaved && (
        <>
          <div className={classes.mainText}>
            Thank you for your interest in our {productLine} products. If you
            would like to be notified when they become available on-line please
            leave us your email. We appreciate that you stopped by!
          </div>
          <ErrorMessage error={error} />
          <div className={classes.fieldContainer}>
            <Field
              component={RenderStdTextField}
              id="email"
              type="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </div>
        </>
      )}
      {interestSaved && (
        <div className={classes.thanksText}>
          Thank you! We will be in touch.
          <div>
            <Button
              size="small"
              color="primary"
              className={classes.button}
              href={`https://victoryselect.com${url}`}
            >
              Return to VictorySelect.com
            </Button>
          </div>
        </div>
      )}
    </UpdatePage>
  );
};
