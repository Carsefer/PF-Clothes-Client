import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import LandingHome from "./components/LandingHome/LandingHome";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingHome />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
