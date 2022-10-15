import { Route, Routes } from "react-router-dom";
import CreateUser from "./components/CreateUser/CreateUser";
import Home from "./components/Home/Home";
import LandingHome from "./components/LandingHome/LandingHome";
import Login from "./components/Login/Login";
import ProductDetail from "./components/ProductDetail/ProductDetail";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingHome />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home/signup" element={<CreateUser />} />
        <Route path="home/product/:id" element={<ProductDetail />} />
        <Route path="/register" element={<CreateUser />} />
      </Routes>
    </>
  );
}

export default App;
