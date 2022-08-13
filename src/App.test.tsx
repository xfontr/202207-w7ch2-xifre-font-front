import App from "./App";
import { render, screen } from "@testing-library/react";

describe("Given an App component", () => {
  describe("When instantiated", () => {
    test("It should show a heading with the text 'ROBOTS'", () => {
      render(<App />);
      const text = "ROBOTS";
      const headingElement = screen.getByRole("heading", { name: text });

      expect(headingElement).not.toBeNull();
    });
  });
});
