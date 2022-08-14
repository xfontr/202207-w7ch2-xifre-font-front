import {
  deleteRobotActionNew,
  getRobotByIdActionNew,
  getRobotsActionNew,
} from "../actionCreators/actionCreators";
import IRobot from "../types/interfaces";
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
    test("Then it should return an array with the robots sent as a payload", () => {
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

  describe("When called with a getRobotById action as an argument", () => {
    test("Then it should return an array with the robot which id is the same one sent as payload", () => {
      const robots: IRobot[] = [];
      const newRobot = {
        _id: "0",
        name: "Bender",
        image: "#",
        creationDate: "13/08/2022",
        speed: 9,
        endurance: 3,
      };

      const action = getRobotByIdActionNew(newRobot);

      const result = robotsReducer(robots, action);

      expect(result).toStrictEqual([newRobot]);
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
          name: "roboboutToBeDeleted",
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
