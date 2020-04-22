import React from "react";
import { EDWelcome } from "./WelcomeMessages";

export const MessageText = (props) => {
  const { message } = props;
  console.log("Message Text:", message);

  switch (message.text) {
    case "[ED_WELCOME]":
      return <EDWelcome message={message} />;

    default:
      return message.text;
  }
};
