import { useContext } from "react";
import { useSelector } from "react-redux";
import { Counter, CounterWithLogger } from "../../Components/Counter";
import { MessageList } from "../../Components/MessageList";
import { profileSelector } from "../../Store/Profile/selectors";
import { Message } from "../../Message";
import logo from "../../logo.svg";
import { MyContext } from "../../App";

import "./Home.css";

export const Home = () => {
  const name = "Vasja";

  const { theme } = useContext(MyContext);

  const { name: userName } = useSelector(profileSelector);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{userName}</h1>
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

        <CounterWithLogger render={() => <h1>Test render props pattern</h1>}>
          {({ color }, props) => (
            <div style={{ color }} {...props}>
              counter text <input />
            </div>
          )}
        </CounterWithLogger>
        <MessageList />
        <Message name={name} qwerty={""} />
      </header>
    </div>
  );
};
