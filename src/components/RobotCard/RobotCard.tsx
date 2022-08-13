import IRobot from "../../store/types/interfaces";

interface RobotCardProps {
  robot: IRobot;
}

const RobotCard = ({ robot }: RobotCardProps): JSX.Element => {
  return (
    <li>
      <article>
        <h2 className="robot__name">{robot.name}</h2>
        <span className="robot__date">Created on {robot.creationDate}</span>
        <img className="robot__image" src={robot.image} alt={robot.name} />
        <ul className="robot__data">
          <li className="robot__data-item">Speed: {robot.speed}</li>
          <li className="robot__data-item">Endurance: {robot.endurance}</li>
        </ul>
      </article>
    </li>
  );
};

export default RobotCard;
