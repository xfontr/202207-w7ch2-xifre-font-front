import RobotList from "./RobotList";
import { getAllByText, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";

describe("Given a RobotList component", () => {
  describe("When instantiated", () => {
    test("It should show a heading with the text 'Robot List'", () => {
      render(
        <Provider store={store}>
          <RobotList />
        </Provider>
      );
      const text = "Robot List";
      const headingElement = screen.getByRole("heading", { name: text });

      expect(headingElement).not.toBeNull();
    });

    test("Then it should show a list of robots", () => {
      render(
        <Provider store={store}>
          <RobotList />
        </Provider>
      );

      const robots = screen.getAllByRole("heading", { name: "Bender" });

      robots.forEach((robot) => expect(robot).toBeInTheDocument());
    });
  });
});
