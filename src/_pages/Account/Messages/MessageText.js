import React from "react";
import { WelcomeMessage } from "./WelcomeMessages";

export const MessageText = (props) => {
  const { message } = props;

  switch (message.text) {
    case "[ED_WELCOME]":
      return <WelcomeMessage type="ED" message={message} />;

    case "[HAIR_WELCOME]":
      return <WelcomeMessage type="HAIR" message={message} />;

    case "[SLEEP_WELCOME]":
      return <WelcomeMessage type="SLEEP" message={message} />;

    default:
      return message.text;
  }
};
