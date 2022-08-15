import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RobotDetails from "../../components/RobotDetails/RobotDetails";
import useAPI from "../../hooks/useAPI";
import { selectAllRobots } from "../../store/selectors/selectors";
import IRobot from "../../store/types/interfaces";

const RobotDetailsPage = (): JSX.Element => {
  const { getRobotById } = useAPI();
  const { id } = useParams();

  const getRobot = useCallback(async () => {
    await getRobotById(id as string);
  }, [id, getRobotById]);

  useEffect(() => {
    (async () => {
      await getRobot();
    })();
  }, [getRobot]);

  const { robots } = useSelector(selectAllRobots);

  return (
    <>
      {robots[0] && <RobotDetails robot={robots[0] as IRobot} />}
      {!robots[0] && <p>Couldn't get the beep bop boy</p>}
    </>
  );
};

export default RobotDetailsPage;
