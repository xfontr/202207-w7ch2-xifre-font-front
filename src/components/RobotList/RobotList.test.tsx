import RobotList from "./RobotList";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import mockStore from "../../mocks/mockStore";

describe("Given a RobotList component", () => {
  describe("When instantiated", () => {
    test("It should show a heading with the text 'Robot List'", () => {
      render(
        <BrowserRouter>
          <Provider store={mockStore}>
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
          <Provider store={mockStore}>
            <RobotList />
          </Provider>
        </BrowserRouter>
      );

      const robots = screen.getAllByRole("heading", { name: "Bender" });

      robots.forEach((robot) => expect(robot).toBeInTheDocument());
    });

    test("It should should a show form button that should show a form on click", async () => {
      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <RobotList />
          </Provider>
        </BrowserRouter>
      );

      const addButton = screen.getByRole("button", { name: "Add robot" });

      expect(addButton).toBeInTheDocument();

      await fireEvent.click(addButton);
      const form = await screen.findAllByRole("textbox");

      expect(form.length > 0).toBe(true);
      expect(addButton.textContent).toBe("Close");

      await fireEvent.click(addButton);

      form.forEach((form) => {
        expect(form).not.toBeInTheDocument();
      });
      expect(addButton.textContent).toBe("Add robot");
    });
  });
});
