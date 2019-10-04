import React from "react";
import { DropzoneArea } from "material-ui-dropzone";
import Box from "@material-ui/core/Box";
import { StandardPage } from "../../../_components";

const validateHairGetAttachment = values => {
  const errors = { labWork: {} };

  return errors;
};

const questionText = "Select your Lab Report file to upload.";
const additionalText = "";

const HairGetAttachmentPage = props => {
  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      alignTitles="center"
      {...props}
    >
      <Box mx="auto" width={400}>
        <DropzoneArea
          dropzoneText="Drag and drop a file here or click"
          showPreviewsInDropzone={false}
          showPreviews={true}
          showFileNamesInPreview={true}
          acceptedFiles={["image/*", "application/*"]}
        />

        {/*   <Field
          name="labWork.fileName"
          type="file"
          label=""
          component={RenderTextField}
          autoFocus={true}
     /> */}
      </Box>
    </StandardPage>
  );
};

export { HairGetAttachmentPage, validateHairGetAttachment };
