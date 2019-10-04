import React from "react";
import { Field } from "react-final-form";
import { StandardPage } from "../../../_components";
import { withStyles } from "@material-ui/core/styles";
import { PictureGrab } from "../../../_components/PictureGrab";

const styles = theme => ({
  picture: {
    margin: theme.spacing(1),
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center"
  }
});

const validatePictures = values => {
  const errors = { personal: {} };
  if (!values.personal.profileImage) {
    errors.personal.profileImage = "Please provide a photo of yourself.";
  }
  if (!values.personal.licenseImage) {
    errors.personal.licenseImage = "Please provide a photo of your ID.";
  }

  return errors;
};

const questionText = "Verify your Identity";
const additionalText =
  "Your provider needs to verify your identity. They will do that by matching photos of your face and a government issued ID.";

class PicturesPage extends React.Component {
  state = {
    image: ""
  };

  render() {
    const { classes, ...rest } = this.props;
    return (
      <StandardPage
        questionText={questionText}
        additionalText={additionalText}
        alignTitles="left"
        {...rest}
      >
        <div className={classes.picture}>
          <Field
            component={PictureGrab}
            name="personal.profileImage"
            label="UPLOAD A PHOTO OF YOURSELF"
          />
        </div>

        <div className={classes.picture}>
          <Field
            component={PictureGrab}
            name="personal.licenseImage"
            label="UPLOAD A PHOTO OF YOUR ID"
          />
        </div>
      </StandardPage>
    );
  }
}

PicturesPage = withStyles(styles)(PicturesPage);

export { PicturesPage, validatePictures };
