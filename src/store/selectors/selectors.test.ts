import { selectAllRobots } from "./selectors";

describe("Given a selectAllTasks component", () => {
  describe("When called with a state as an argument", () => {
    test("Then it should return the same state", () => {
      const robots = {
        robots: [
          {
            name: "Bender",
            image: "#",
            creationDate: "13/08/2022",
            speed: 9,
            endurance: 3,
          },
        ],
      };

      const result = selectAllRobots(robots);

      expect(result).toStrictEqual(robots);
    });
  });
});
