import { Navigate, Route, Routes } from "react-router-dom";
import AppStyled from "./AppStyled";
import HomePage from "./pages/HomePage/HomePage";
import RobotDetails from "./pages/RobotDetails/RobotDetails";

const App = () => {
  return (
    <AppStyled className="App">
      <header>
        <h1>ROBOTS</h1>
      </header>

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/robot/:id" element={<RobotDetails />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
