import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export const StandardHeading = props => {
  const { questionText, additionalText, alignTitles } = props;

  return (
    <>
      <Box mb={0.5}>
        <Typography variant="h6" align={alignTitles}>
          {questionText}
        </Typography>
      </Box>
      <Box mb={1}>
        <Typography variant="body2" align={alignTitles}>
          {additionalText}
        </Typography>
      </Box>
    </>
  );
};
