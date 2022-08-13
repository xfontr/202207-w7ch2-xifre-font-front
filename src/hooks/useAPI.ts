import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { getRobotsActionNew } from "../store/actionCreators/actionCreators";

const useAPI = () => {
  const url = process.env.REACT_APP_API_URL;
  const dispatch = useDispatch();

  const getAllRobots = useCallback(async () => {
    const robotData = await fetch(`${url}robots`);
    const response = await robotData.json();
    dispatch(getRobotsActionNew(response));
  }, [dispatch, url]);

  return {
    getAllRobots,
  };
};

export default useAPI;
