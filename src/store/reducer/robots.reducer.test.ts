import {
  deleteRobotActionNew,
  getRobotsActionNew,
} from "../actionCreators/actionCreators";
import robotsReducer from "./robots.reducer";

describe("Given a robotsReducer function", () => {
  describe("When called with an unknown action as an argument", () => {
    test("Then it should return the same list of initial robots", () => {
      const initialRobots = [
        {
          _id: "0",
          name: "Bender",
          image: "#",
          creationDate: "13/08/2022",
          speed: 9,
          endurance: 3,
        },
      ];

      const unknownAction = {
        type: "",
      };

      const result = robotsReducer(initialRobots, unknownAction);

      expect(result).toStrictEqual(initialRobots);
    });
  });

  describe("When called with a getAll robots action as an argument", () => {
    test("Then it should return an array with the tasks sent as a payload", () => {
      const robots = [
        {
          _id: "0",
          name: "Bender",
          image: "#",
          creationDate: "13/08/2022",
          speed: 9,
          endurance: 3,
        },
      ];

      const action = getRobotsActionNew(robots);

      const result = robotsReducer(robots, action);

      expect(result).toStrictEqual(robots);
    });
  });

  describe("When called with a deleteRobot action as argument", () => {
    test("Then it should return an array of robots minus the robot passed as payload", () => {
      const robotsBefore = [
        {
          _id: "0",
          name: "Bender",
          image: "#",
          creationDate: "13/08/2022",
          speed: 9,
          endurance: 3,
        },
        {
          _id: "1",
          name: "robotAboutToBeDeleted",
          image: "#",
          creationDate: "13/08/2022",
          speed: 9,
          endurance: 3,
        },
      ];
      const robotsAfter = [
        {
          _id: "0",
          name: "Bender",
          image: "#",
          creationDate: "13/08/2022",
          speed: 9,
          endurance: 3,
        },
      ];
      const robot = {
        _id: "1",
        name: "robotAboutToBeDeleted",
        image: "#",
        creationDate: "13/08/2022",
        speed: 9,
        endurance: 3,
      };

      const action = deleteRobotActionNew(robot);
      const result = robotsReducer(robotsBefore, action);

      expect(result).toStrictEqual(robotsAfter);
    });
  });
});
