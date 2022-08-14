import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import RobotCard from "./RobotCard";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

describe("Given a RobotCard component", () => {
  describe("When instantiated with a robot as props", () => {
    test("Then a robot card should be displayed", () => {
      const robot = {
        _id: "0",
        name: "Bender",
        image:
          "https://www.paredro.com/wp-content/uploads/2014/05/sorayama-sexy-robot-2.jpg",
        creationDate: "13/08/2022",
        speed: 9,
        endurance: 3,
      };

      render(<RobotCard robot={robot} />, { wrapper: Wrapper });

      const name = screen.getByRole("heading", { name: robot.name });
      const image = screen.getByAltText(robot.name);
      const endurance = screen.getByText(robot.endurance);
      const speed = screen.getByText(robot.speed);

      const card = [name, image, endurance, speed];

      card.forEach((element) => expect(element).toBeInTheDocument());
    });
  });
});
