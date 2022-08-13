import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAllRobots } from "../../store/selectors/selectors";
import RobotListStyled from "./RobotListStyled";
import useAPI from "../../hooks/useAPI";

const RobotList = (): JSX.Element => {
  const { robots } = useSelector(selectAllRobots);
  const { getAllRobots } = useAPI();

  useEffect(() => {
    getAllRobots();
  }, [getAllRobots]);

  return (
    <RobotListStyled className="robot-gallery">
      <h2 className="robot-gallery__title">Robot List</h2>
      <ul className="robot-gallery__list">
        {robots.map((robot) => (
          <li key={robot.name}>
            <article>
              <h2>{robot.name}</h2>
            </article>
          </li>
        ))}
      </ul>
    </RobotListStyled>
  );
};

export default RobotList;
