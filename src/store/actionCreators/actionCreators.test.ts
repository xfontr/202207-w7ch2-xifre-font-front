import {
  deleteRobotActionNew,
  getRobotByIdActionNew,
  getRobotsActionNew,
} from "./actionCreators";

describe("Given a getRobotsActionNew function", () => {
  describe("When called", () => {
    test("Then it should return an action with type 'loadRobots' and an array of robots as a payload", () => {
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

      const expectedResult = {
        type: "robots@getAll",
        payload: robots,
      };

      const result = getRobotsActionNew(robots);

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given a deleteRobotActionNew function", () => {
  describe("When called", () => {
    test("It should return and action with type 'delete' and a robot object as payload", () => {
      const robot = {
        _id: "0",
        name: "Bender",
        image: "#",
        creationDate: "13/08/2022",
        speed: 9,
        endurance: 3,
      };
      const expectedResult = {
        type: "robots@delete",
        payload: robot,
      };

      const result = deleteRobotActionNew(robot);
      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given a getRobotByIdActionNew function", () => {
  describe("When called", () => {
    test("It should return and action with type 'getById' and an id as payload", () => {
      const id = 1;
      const expectedResult = {
        type: "robots@getById",
        payload: id,
      };

      const result = getRobotByIdActionNew(id);

      expect(result).toEqual(expectedResult);
    });
  });
});
