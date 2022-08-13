import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRobotsActionNew } from "../../store/actionCreators/actionCreators";
import { selectAllRobots } from "../../store/selectors/selectors";
import RobotListStyled from "./RobotListStyled";

const RobotList = (): JSX.Element => {
  const dispatch = useDispatch();
  const { robots } = useSelector(selectAllRobots);

  useEffect(() => {
    const robotsMock = [
      {
        name: "Bender",
        imag: "#",
        creationDate: "13/08/2022",
        speed: 9,
        endurance: 3,
      },
    ];

    dispatch(getRobotsActionNew(robotsMock));
  }, [dispatch]);

  return (
    <RobotListStyled className="robot-gallery">
      <h2 className="robot-gallery__title">Robot List</h2>
      <ul className="robot-gallery__list">
        {robots.map((robot) => (
          <li>
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
