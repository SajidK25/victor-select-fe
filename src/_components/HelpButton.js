import React from "react";
import Help from "@material-ui/icons/Help";
import IconButton from "@material-ui/core/IconButton";

// Previous Button
export const HelpButton = () => {
  return (
    <IconButton color="primary" aria-label="Help">
      <Help />
    </IconButton>
  );
};
