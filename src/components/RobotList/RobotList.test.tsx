import RobotList from "./RobotList";
import { render, screen } from "@testing-library/react";

describe("Given a RobotList component", () => {
  describe("When instantiated", () => {
    test("It should show a heading with the text 'Robot List'", () => {
      render(<RobotList />);
      const text = "Robot List";
      const headingElement = screen.getByRole("heading", { name: text });

      expect(headingElement).not.toBeNull();
    });
  });
});
