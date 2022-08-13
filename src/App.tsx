import AppStyled from "./AppStyled";
import RobotList from "./components/RobotList/RobotList";

const App = () => {
  return (
    <AppStyled className="App">
      <header>
        <h1>ROBOTS</h1>
        <RobotList />
      </header>
    </AppStyled>
  );
};

export default App;
