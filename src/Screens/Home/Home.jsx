import { Counter } from "../../Components/Counter";
import { MessageList } from "../../Components/MessageList";
import { Message } from "../../Message";
import logo from "../../logo.svg";

import "./Home.css";

export const Home = () => {
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

        <Counter render={() => <h1>Test render props pattern</h1>}>
          {({ color }, props) => (
            <div style={{ color }} {...props}>
              counter text <input />
            </div>
          )}
        </Counter>
        <MessageList />
        <Message name={name} qwerty={""} />
      </header>
    </div>
  );
};
