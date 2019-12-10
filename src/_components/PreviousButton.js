import React from "react";
import ArrowBack from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";

// Previous Button
export const PreviousButton = props => {
  const { handleClick } = props;

  return (
    <IconButton onClick={handleClick} color="primary">
      <ArrowBack />
    </IconButton>
  );
};
