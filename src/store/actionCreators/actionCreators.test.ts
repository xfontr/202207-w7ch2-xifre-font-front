import { loadRobotsActionNew } from "./actionCreators";

describe("Given a loadRobotsActionNew function", () => {
  describe("When called", () => {
    test("Then it should return an action with type 'loadRobots' and an array of robots as a payload", () => {
      const robots = [
        {
          name: "Bender",
          imag: "#",
          creationDate: "13/08/2022",
          speed: 9,
          endurance: 3,
        },
      ];

      const expectedResult = {
        type: "robots@getAll",
        payload: robots,
      };

      const result = loadRobotsActionNew(robots);

      expect(result).toEqual(expectedResult);
    });
  });
});
