import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Home } from "../Home";
import { store } from "../../../Store";

describe("test Home component", () => {
  it("find 'learn react' text", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  it("find 'Test render props pattern' text", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const linkElement = screen.getByText(/Test render props pattern/i);
    expect(linkElement).toBeInTheDocument();
  });
  it("find 'Test render props pattern' text", () => {
    const component = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
