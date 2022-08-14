import RobotList from "./RobotList";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { BrowserRouter } from "react-router-dom";

describe("Given a RobotList component", () => {
  describe("When instantiated", () => {
    test("It should show a heading with the text 'Robot List'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RobotList />
          </Provider>
        </BrowserRouter>
      );
      const text = "Robot List";
      const headingElement = screen.getByRole("heading", { name: text });

      expect(headingElement).not.toBeNull();
    });

    test("Then it should show a list of robots", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RobotList />
          </Provider>
        </BrowserRouter>
      );

      const robots = screen.getAllByRole("heading", { name: "Bender" });

      robots.forEach((robot) => expect(robot).toBeInTheDocument());
    });
  });
});
