import App from "./App";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";

describe("Given an App component", () => {
  describe("When instantiated", () => {
    test("It should show a heading with the text 'ROBOTS'", () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      const text = "ROBOTS";
      const headingElement = screen.getByRole("heading", { name: text });

      expect(headingElement).not.toBeNull();
    });
  });
});
