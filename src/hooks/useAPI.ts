import { useDispatch } from "react-redux";
import { useCallback } from "react";
import {
  getRobotByIdActionNew,
  getRobotsActionNew,
  deleteRobotActionNew,
  addRobotActionNew,
  modifyRobotActionNew,
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
    async (robotId: string) => {
      const robotData = await fetch(`${url}robots/${robotId}`);
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

      dispatch(deleteRobotActionNew(robot));
    },
    [dispatch, url]
  );

  const postRobot = useCallback(
    async (robot: Partial<IRobot>) => {
      const newRobotWithoudId = await fetch(`${url}robots/create`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(robot),
      });
      const { newRobot } = await newRobotWithoudId.json();

      await dispatch(addRobotActionNew(newRobot));
    },
    [dispatch, url]
  );

  const modifyRobot = useCallback(
    async (robot: Partial<IRobot>) => {
      const modifiedRobot = await fetch(`${url}update/`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(robot),
      });
      const { newRobot } = await modifiedRobot.json();

      await dispatch(modifyRobotActionNew(newRobot));
    },
    [dispatch, url]
  );

  return {
    getAllRobots,
    getRobotById,
    deleteRobot,
    postRobot,
    modifyRobot,
  };
};

export default useAPI;
