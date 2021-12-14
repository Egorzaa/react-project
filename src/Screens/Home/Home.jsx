import { CounterWithLogger } from "../../Components/Counter";
import { Child } from "../../Components/Counter/Child";

import "./Home.css";

export const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <CounterWithLogger render={() => <h1>Test render props pattern</h1>}>
          {({ color }, props) => {
            console.log("rerender");
            return (
              <div style={{ color }} {...props}>
                counter text <input />
              </div>
            );
          }}
        </CounterWithLogger>
        <Child />
      </header>
    </div>
  );
};
