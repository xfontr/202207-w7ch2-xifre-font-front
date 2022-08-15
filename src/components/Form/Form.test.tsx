import Form from "./Form";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import userEvent from "@testing-library/user-event";

const mockPostRobot = jest.fn();

jest.mock("../../hooks/useAPI", () => ({
  __esModule: true,
  ...jest.requireActual("../../hooks/useAPI"),
  default: () => ({
    getAllRobots: () => jest.fn(),
    getRobotById: () => jest.fn(),
    deleteRobot: () => jest.fn(),
    postRobot: () => mockPostRobot(),
  }),
}));

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

describe("Given a Form component", () => {
  describe("When instantiated", () => {
    test("It should show four labels with four inputs attached to each", () => {
      render(<Form typeOfForm="create" />, { wrapper: Wrapper });

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

  describe("When text is entered in the input boxes", () => {
    test("It should change the 'value' property of name input element", () => {
      render(<Form typeOfForm="create" />, { wrapper: Wrapper });
      const input = screen.getByTestId("name") as HTMLInputElement;
      fireEvent.change(input, {
        target: { value: "a" },
      });
      expect(input.value).toBe("a");
    });

    test("It should change the 'value' property of image input element", () => {
      render(<Form typeOfForm="create" />, { wrapper: Wrapper });
      const input = screen.getByTestId("image") as HTMLInputElement;
      fireEvent.change(input, {
        target: { value: "a" },
      });
      expect(input.value).toBe("a");
    });

    test("It should change the 'value' property of speed input element", () => {
      render(<Form typeOfForm="create" />, { wrapper: Wrapper });
      const input = screen.getByTestId("speed") as HTMLInputElement;
      fireEvent.change(input, {
        target: { value: "a" },
      });
      expect(input.value).toBe("a");
    });

    test("It should change the 'value' property of endurance input element", () => {
      render(<Form typeOfForm="create" />, { wrapper: Wrapper });
      const input = screen.getByTestId("endurance") as HTMLInputElement;
      fireEvent.change(input, {
        target: { value: "a" },
      });
      expect(input.value).toBe("a");
    });
  });

  describe("When form button is clicked", () => {
    test("It should prevent its default behaviour", async () => {
      render(<Form typeOfForm="create" />, { wrapper: Wrapper });

      const buttonElement = screen.getByRole("button");
      await userEvent.click(buttonElement);

      expect(mockPostRobot).toHaveBeenCalled();
    });
  });
});
