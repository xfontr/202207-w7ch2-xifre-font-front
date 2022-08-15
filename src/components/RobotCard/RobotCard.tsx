import IRobot from "../../store/types/interfaces";
import Button from "../Button/Button";
import RobotCardStyled from "./RobotCardStyled";
import useAPI from "../../hooks/useAPI";
import { Link, useLocation } from "react-router-dom";
import Form from "../Form/Form";
import { useState } from "react";

interface RobotCardProps {
  robot: IRobot;
}

const RobotCard = ({ robot }: RobotCardProps): JSX.Element => {
  const location = useLocation();
  const [isFormVisible, setFormVisibility] = useState(false);

  const toggleForm = (): void => {
    setFormVisibility(!isFormVisible);
  };

  const { deleteRobot } = useAPI();
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

        <Button
          key="button-delete"
          buttonType={"icon-trash"}
          action={() => {
            deleteRobot(robot);
          }}
        />

        <Link
          className="view-details"
          to={`${location.pathname.slice(4, -1)}/robot/${robot._id}`}
        >
          <Button
            key="button-view"
            buttonType={"icon-view"}
            action={() => {}}
          />
        </Link>

        <Button
          key="button-modify"
          buttonType={"icon-tool"}
          action={() => {
            toggleForm();
          }}
        />
      </RobotCardStyled>
      {isFormVisible && <Form typeOfForm="update" />}
    </li>
  );
};

export default RobotCard;
