import { render, screen } from "@testing-library/react";
import RobotCard from "./RobotCard";

describe("Given a RobotCard component", () => {
  describe("When instantiated with a robot as props", () => {
    test("Then a robot card should be displayed", () => {
      const robot = {
        name: "Bender",
        image:
          "https://www.paredro.com/wp-content/uploads/2014/05/sorayama-sexy-robot-2.jpg",
        creationDate: "13/08/2022",
        speed: 9,
        endurance: 3,
      };

      render(<RobotCard robot={robot} />);

      const name = screen.getByRole("heading", { name: robot.name });
      const image = screen.getByAltText(robot.name);
      const endurance = screen.getByText(robot.endurance);
      const speed = screen.getByText(robot.speed);

      const card = [name, image, endurance, speed];

      card.forEach((element) => expect(element).toBeInTheDocument());
    });
  });
});
