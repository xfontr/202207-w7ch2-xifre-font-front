import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RobotDetails from "../../components/RobotDetails/RobotDetails";
import useAPI from "../../hooks/useAPI";
import { selectAllRobots } from "../../store/selectors/selectors";

const RobotDetailsPage = (): JSX.Element => {
  const { getRobotById } = useAPI();
  const { id } = useParams();

  useEffect(() => {
    getRobotById(id as string);
  });

  const { robots } = useSelector(selectAllRobots);

  return <RobotDetails robot={robots[0]} />;
};

export default RobotDetailsPage;
