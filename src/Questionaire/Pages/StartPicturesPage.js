import React from "react";
import { Field } from "react-final-form";
import { StandardPage, FieldContainer } from "../../_components";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  image: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "gray"
  }
});

const validatePictures = values => {
  const errors = { personal: {} };

  return errors;
};

const questionText = "Verify your Identity";
const additionalText =
  "Your provider needs to verify your identity. They will do that by matching photos of your face and a government issued ID.";

class PicturesPage extends React.Component {
  state = {
    image: ""
  };

  uploadFile = async e => {
    console.log("uploading file...");
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "sickfits");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/bakerman59/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();
    console.log(file);
    this.setState({
      image: file.secure_url
    });
  };

  render() {
    console.log(this.props);
    const { handleSubmit, classes, ...rest } = this.props;
    return (
      <StandardPage
        questionText={questionText}
        additionalText={additionalText}
        alignTitles="center"
        {...rest}
      >
        <FieldContainer>
          <input
            accept="image/*"
            className={classes.input}
            id="imageFile"
            name="imageFile"
            multiple
            type="file"
            required
            onChange={this.uploadFile}
          />
          <label htmlFor="imageFile">
            <Button
              variant="contained"
              component="span"
              className={classes.button}
            >
              Upload
            </Button>
            {this.state.image && (
              <img
                className={classes.image}
                width="200"
                src={this.state.image}
                alt="Upload Preview"
              />
            )}
          </label>
        </FieldContainer>
      </StandardPage>
    );
  }
}

PicturesPage = withStyles(styles)(PicturesPage);

export { PicturesPage, validatePictures };
