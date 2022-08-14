import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import RobotDetails from "./RobotDetails";

describe("Given a RobotDetails component", () => {
  describe("When instantiated", () => {
    test("Then it should show all the robot details", () => {
      const dummyRobot = {
        _id: "0",
        name: "Bender",
        image:
          "https://www.paredro.com/wp-content/uploads/2014/05/sorayama-sexy-robot-2.jpg",
        creationDate: "13/08/2022",
        speed: 9,
        endurance: 3,
      };

      render(
        <Provider store={store}>
          <RobotDetails robot={dummyRobot} />
        </Provider>
      );

      const robotName = screen.getByRole("heading", { name: dummyRobot.name });
      const robotImage = screen.getByAltText(dummyRobot.name);
      const robotEndurance = screen.getByText(dummyRobot.endurance);
      const robotSpeed = screen.getByText(dummyRobot.speed);
      const robotDate = screen.getByText(
        `Created on ${dummyRobot.creationDate}`
      );

      const details = [
        robotName,
        robotImage,
        robotEndurance,
        robotSpeed,
        robotDate,
      ];

      details.forEach((detail) => expect(detail).toBeInTheDocument());
    });
  });
});
