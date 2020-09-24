import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { ErrorDisplay } from "./";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    marginTop: 2,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
  input: {
    display: "none",
  },
  paper: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "gray",
    width: "100%",
    minHeight: 200,
  },
  image: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
}));

const PictureGrab = (props) => {
  const {
    name,
    input,
    label,
    meta: { touched, error },
  } = props;
  const [image, setImage] = useState(input.value);
  const [uploading, setUploading] = useState(false);
  const classes = useStyles();

  const uploadFile = async (e, input) => {
    setUploading(true);
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "victory-select");

    const res = await fetch("https://api.cloudinary.com/v1_1/bakerman59/image/upload", {
      method: "POST",
      body: data,
    });
    const file = await res.json();
    setImage(file.secure_url);
    input.onChange(file.secure_url);
    setUploading(false);
  };

  return (
    <div className={classes.fileZone}>
      <label htmlFor={name}>
        <input
          accept="image/*"
          className={classes.input}
          name={name}
          id={name}
          type="file"
          onChange={(e) => uploadFile(e, input)}
        />
        <Paper className={classes.paper}>
          {image && <img className={classes.image} height="200" src={image} alt="Upload Preview" />}
        </Paper>
        <Button variant="outlined" color="primary" component="span" className={classes.button} disabled={uploading}>
          {label}
        </Button>
        {touched && error && <ErrorDisplay errorText={error} />}
      </label>
    </div>
  );
};

export { PictureGrab };
