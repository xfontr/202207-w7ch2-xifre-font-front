import Button from "./Button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Given a Button component", () => {
  describe("When instantiated", () => {
    test("It should show a button element", () => {
      render(<Button buttonType={""} action={() => null} />);
      const buttonElement = screen.getByRole("button");

      expect(buttonElement).not.toBeNull();
    });

    test("And when clicked on, it should call the function passed via props", () => {
      const mockFunction = jest.fn();
      render(<Button buttonType={""} action={mockFunction()} />);
      const buttonElement = screen.getByRole("button");

      userEvent.click(buttonElement);

      expect(mockFunction).toHaveBeenCalled();
    });
  });
});
