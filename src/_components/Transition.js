import React from "react";
import Slide from "@material-ui/core/Slide";

export const Transition = props => {
  const { direction } = props;

  return (
    <Slide
      in={true}
      direction={direction}
      timeout={400}
      mountOnEnter
      unmountOnExit
    >
      <div {...props}>{props.children}</div>
    </Slide>
  );
};
