import Form from "./Form";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

describe("Given a Form component", () => {
  describe("When instantiated", () => {
    test("It should show fourt labels with four inputs attached to each", () => {
      render(<Form />, { wrapper: Wrapper });

      const nameLabel = screen.getByLabelText("Name");
      expect(nameLabel).not.toBeNull();
      const imageLabel = screen.getByLabelText("Image");
      expect(imageLabel).not.toBeNull();
      const speedLabel = screen.getByLabelText("Speed");
      expect(speedLabel).not.toBeNull();
      const enduranceLabel = screen.getByLabelText("Endurance");
      expect(enduranceLabel).not.toBeNull();
    });
  });
});
