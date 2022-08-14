import IRobot from "../../store/types/interfaces";
import RobotDetailsStyled from "./RobotDetailsStyled";

interface RobotDetailsProps {
  robot: IRobot;
}

const RobotDetails = ({ robot }: RobotDetailsProps): JSX.Element => {
  return (
    <RobotDetailsStyled>
      <h2 className="robot__name">{robot.name}</h2>
      <span className="robot__date">Created on {robot.creationDate}</span>
      <img
        className="robot__image"
        height="350"
        width="320"
        src={robot.image}
        alt={robot.name}
      />
      <ul className="robot__data">
        <li className="robot__data-item">
          <span>Speed:</span>
          {robot.speed}
        </li>
        <li className="robot__data-item">
          <span>Endurance:</span> {robot.endurance}
        </li>
      </ul>
    </RobotDetailsStyled>
  );
};

export default RobotDetails;
