import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Message } from "./Message";
import { Counter } from "./Components/Counter";
import { MessageList } from "./Components/MessageList";

const App = () => {
  const name = "Vasja";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Counter />
        <MessageList />
        <Message name={name} qwerty={""} />
      </header>
    </div>
  );
};

export default App;
