import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRobotsActionNew } from "../../store/actionCreators/actionCreators";
import RobotListStyled from "./RobotListStyled";

const RobotList = (): JSX.Element => {
  const dispatch = useDispatch();

  const robotsMock = [
    {
      name: "Bender",
      imag: "#",
      creationDate: "13/08/2022",
      speed: 9,
      endurance: 3,
    },
  ];

  useEffect(() => {
    dispatch(getRobotsActionNew(robotsMock));
  });

  return (
    <RobotListStyled className="robot-gallery">
      <h2 className="robot-gallery__title">Robot List</h2>
      <ul className="robot-gallery__list"></ul>
    </RobotListStyled>
  );
};

export default RobotList;
