import RobotDetails from "../../components/RobotDetails/RobotDetails";

const RobotDetailsPage = (): JSX.Element => {
  const dummyRobot = {
    _id: "0",
    name: "Bender",
    image:
      "https://www.paredro.com/wp-content/uploads/2014/05/sorayama-sexy-robot-2.jpg",
    creationDate: "13/08/2022",
    speed: 9,
    endurance: 3,
  };

  return <RobotDetails robot={dummyRobot} />;
};

export default RobotDetailsPage;
