import React from "react";
import { EDWelcome } from "./WelcomeMessages";

export const MessageText = (props) => {
  const { message } = props;

  switch (message.text) {
    case "[ED_WELCOME]":
      return <EDWelcome message={message} />;

    default:
      return message.text;
  }
};
