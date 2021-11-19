import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";

const INITIAL_MESSAGES = ["1", "2", "3", "4"];
const AUTHORS = {
  ME: "Vasja",
  BOT: "BOT",
};

export const MessageList = ({ name = "qwerty" }) => {
  const [messageList] = useState(INITIAL_MESSAGES);

  return (
    <>
      {messageList.map((message) => (
        <div key={message}>{message}</div>
      ))}
    </>
  );
};

MessageList.propTypes = {
  name: PropTypes.number,
};
