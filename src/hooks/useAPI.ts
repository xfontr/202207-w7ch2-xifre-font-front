import { useDispatch } from "react-redux";
import { useCallback } from "react";
import {
  getRobotByIdActionNew,
  getRobotsActionNew,
  deleteRobotActionNew,
} from "../store/actionCreators/actionCreators";
import IRobot from "../store/types/interfaces";

const useAPI = () => {
  const url = process.env.REACT_APP_API_URL;
  const dispatch = useDispatch();

  const getAllRobots = useCallback(async () => {
    const robotData = await fetch(`${url}robots`);
    const response = await robotData.json();

    dispatch(getRobotsActionNew(response));
  }, [dispatch, url]);

  const getRobotById = useCallback(
    async (robotId: number | string) => {
      const robotData = await fetch(`${url}robots/${robotId as string}`);
      const response = await robotData.json();

      dispatch(getRobotByIdActionNew(response));
    },
    [dispatch, url]
  );

  const deleteRobot = useCallback(
    async (robot: IRobot) => {
      await fetch(`${url}robots/delete/${robot._id}`, {
        method: "DELETE",
      });
      await dispatch(deleteRobotActionNew(robot));
    },
    [dispatch, url]
  );

  return {
    getAllRobots,
    getRobotById,
    deleteRobot,
  };
};

export default useAPI;
