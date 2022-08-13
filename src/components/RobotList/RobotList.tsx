import RobotListStyled from "./RobotListStyled";

const RobotList = (): JSX.Element => {
  return (
    <RobotListStyled className="robot-gallery">
      <h2 className="robot-gallery__title">Robot List</h2>
      <ul className="robot-gallery__list"></ul>
    </RobotListStyled>
  );
};

export default RobotList;
