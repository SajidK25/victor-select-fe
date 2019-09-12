import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export const StandardHeading = props => {
  const {
    questionText,
    additionalText,
    alignTitles,
    titleColor,
    additionalColor,
    additionalWeight
  } = props;

  return (
    <>
      {questionText && (
        <Box mb={0.5}>
          <Typography variant="h6" align={alignTitles} color={titleColor}>
            {questionText}
          </Typography>
        </Box>
      )}
      {additionalText && (
        <Box mb={1}>
          <Typography
            variant="body2"
            align={alignTitles}
            color={additionalColor}
          >
            {additionalText}
          </Typography>
        </Box>
      )}
    </>
  );
};
