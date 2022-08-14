import { Navigate, Route, Routes } from "react-router-dom";
import AppStyled from "./AppStyled";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <AppStyled className="App">
      <header>
        <h1>ROBOTS</h1>
      </header>

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
