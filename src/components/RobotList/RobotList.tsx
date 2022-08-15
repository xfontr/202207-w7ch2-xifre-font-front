import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAllRobots } from "../../store/selectors/selectors";
import RobotCard from "../RobotCard/RobotCard";
import RobotListStyled from "./RobotListStyled";
import useAPI from "../../hooks/useAPI";
import Form from "../Form/Form";
import Button from "../Button/Button";

const RobotList = (): JSX.Element => {
  const { robots } = useSelector(selectAllRobots);
  const { getAllRobots } = useAPI();
  const [isFormVisible, setFormVisibility] = useState(false);

  useEffect(() => {
    getAllRobots();
  }, [getAllRobots]);

  const toggleForm = (): void => {
    setFormVisibility(!isFormVisible);
  };

  return (
    <>
      <Button
        key={"form-button"}
        content={isFormVisible ? "Close" : "Add robot"}
        buttonType="normal"
        action={() => toggleForm()}
      />
      {isFormVisible && <Form key={"form"} />}
      {robots.length > 0 && (
        <RobotListStyled className="robot-gallery">
          <h2 className="robot-gallery__title">Robot List</h2>

          <ul className="robot-gallery__list">
            {robots.map((robot, index) => (
              <RobotCard robot={robot} key={`${robot.name}${index}`} />
            ))}
          </ul>
        </RobotListStyled>
      )}
      {robots.length === 0 && <p>Beeb bop no robots found</p>}
    </>
  );
};

export default RobotList;
