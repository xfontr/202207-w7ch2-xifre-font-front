import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import RobotDetailsPage from "./RobotDetailsPage";

describe("Given a RobotDetails component", () => {
  describe("When instantiated", () => {
    test("Then it should show a component with all the robot details", () => {
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
          <RobotDetailsPage />
        </Provider>
      );

      const robotName = screen.getByRole("heading", { name: dummyRobot.name });

      expect(robotName).toBeInTheDocument();
    });
  });
});
