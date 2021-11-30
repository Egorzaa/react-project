import { createContext } from "react";
import { Provider } from "react-redux";
import { Router } from "./Router";
import { store } from "./Store";

export const MyContext = createContext({ theme: "light" });

const App = () => {
  return (
    <Provider store={store}>
      <MyContext.Provider value={{ theme: "dark" }}>
        <Router />
      </MyContext.Provider>
    </Provider>
  );
};

export default App;
