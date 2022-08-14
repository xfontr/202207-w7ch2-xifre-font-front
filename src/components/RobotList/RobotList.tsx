import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAllRobots } from "../../store/selectors/selectors";
import RobotCard from "../RobotCard/RobotCard";
import RobotListStyled from "./RobotListStyled";
import useAPI from "../../hooks/useAPI";
import Form from "../Form/Form";

const RobotList = (): JSX.Element => {
  const { robots } = useSelector(selectAllRobots);
  const { getAllRobots } = useAPI();

  useEffect(() => {
    getAllRobots();
  }, [getAllRobots]);

  return (
    <RobotListStyled className="robot-gallery">
      <h2 className="robot-gallery__title">Robot List</h2>
      <Form />
      <ul className="robot-gallery__list">
        {robots.map((robot) => (
          <RobotCard robot={robot} key={robot.name} />
        ))}
      </ul>
    </RobotListStyled>
  );
};

export default RobotList;
