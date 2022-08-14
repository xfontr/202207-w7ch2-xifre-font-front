import IRobot from "../../store/types/interfaces";
import Button from "../Button/Button";
import RobotCardStyled from "./RobotCardStyled";

interface RobotCardProps {
  robot: IRobot;
}

const RobotCard = ({ robot }: RobotCardProps): JSX.Element => {
  return (
    <li>
      <RobotCardStyled>
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
        <Button buttonType={"icon"} action={() => null} />
      </RobotCardStyled>
    </li>
  );
};

export default RobotCard;
