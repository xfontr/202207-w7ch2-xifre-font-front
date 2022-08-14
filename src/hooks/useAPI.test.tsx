import { renderHook, waitFor } from "@testing-library/react";
import { Provider, useSelector } from "react-redux";
import { store } from "../app/store";
import { selectAllRobots } from "../store/selectors/selectors";
import IRobot from "../store/types/interfaces";

import useAPI from "./useAPI";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

describe("Given a useAPI hook", () => {
  describe("When its function getAllRobots is called", () => {
    test("It should add all robots from the DB to the store state", async () => {
      const dataMock = [
        {
          _id: "0",
          name: "LOL",
          image: "#",
          creationDate: "13/08/2022",
          speed: 9,
          endurance: 3,
        },
      ];
      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue(dataMock),
      });

      const {
        result: {
          current: { getAllRobots },
        },
      } = renderHook(useAPI, { wrapper: Wrapper });

      await waitFor(() => {
        getAllRobots();
      });

      const {
        result: {
          current: { robots },
        },
      } = renderHook(() => useSelector(selectAllRobots), {
        wrapper: Wrapper,
      });

      expect(robots).toStrictEqual(dataMock);
    });
  });

  describe("When its function deleteRobot is called", () => {
    test("It should delete the robot passed as arguments from the DB and from the state", async () => {
      const {
        result: {
          current: { robots: initialState },
        },
      } = renderHook(() => useSelector(selectAllRobots), {
        wrapper: Wrapper,
      });

      expect(initialState).toHaveLength(1);

      const robotArgument: IRobot = {
        _id: "0",
        name: "LOL",
        image: "#",
        creationDate: "13/08/2022",
        speed: 9,
        endurance: 3,
      };
      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue({
          message: `Succesfully deleted the robot with ID ${robotArgument._id}`,
        }),
      });

      const {
        result: {
          current: { deleteRobot },
        },
      } = renderHook(useAPI, { wrapper: Wrapper });

      await waitFor(() => {
        deleteRobot(robotArgument);
      });

      const {
        result: {
          current: { robots: stateAfterDeletion },
        },
      } = renderHook(() => useSelector(selectAllRobots), {
        wrapper: Wrapper,
      });

      expect(stateAfterDeletion).toHaveLength(0);
    });
  });
});
