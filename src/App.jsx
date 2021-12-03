import { createContext } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Router } from "./Router";
import { persistor, store } from "./Store";

export const MyContext = createContext({ theme: "light" });

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MyContext.Provider value={{ theme: "dark" }}>
          <Router />
        </MyContext.Provider>
      </PersistGate>
    </Provider>
  );
};

export default App;
