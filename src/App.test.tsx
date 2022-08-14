import App from "./App";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";

describe("Given an App component", () => {
  describe("When instantiated", () => {
    test("It should show a heading with the text 'ROBOTS'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );
      const text = "ROBOTS";
      const headingElement = screen.getByRole("heading", { name: text });

      expect(headingElement).not.toBeNull();
    });
  });
});
