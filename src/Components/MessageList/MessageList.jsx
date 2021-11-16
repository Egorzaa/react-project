import React, { useState, Fragment } from "react";

const INITIAL_MESSAGES = ["1", "2", "3", "4"];
const AUTHORS = {
  ME: "Vasja",
  BOT: "BOT",
};

export const MessageList = () => {
  const [messageList] = useState(INITIAL_MESSAGES);

  return (
    <>
      {messageList.map((message) => (
        <div key={message}>{message}</div>
      ))}
    </>
  );
};
