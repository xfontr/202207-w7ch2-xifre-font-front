import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import HomePage from "./HomePage";

describe("Given a HomPage component", () => {
  describe("When instantiated", () => {
    test("Then it should show a list of robots", () => {
      render(
        <Provider store={store}>
          <HomePage />
        </Provider>
      );

      const initialRobotName = "Bender";
      const robotHeading = screen.getByRole("heading", {
        name: initialRobotName,
      });

      expect(robotHeading).toBeInTheDocument();
    });
  });
});
