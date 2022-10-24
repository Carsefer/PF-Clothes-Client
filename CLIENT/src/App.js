import { Route, Routes } from "react-router-dom";
import CreateStore from "./components/CreateStore/CreateStore";
import CreateUser from "./components/CreateUser/CreateUser";
import Favorites from "./components/Favorites/Favorites";
import Home from "./components/Home/Home";
import LandingHome from "./components/LandingHome/LandingHome";
import Login from "./components/Login/Login";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Profile from "./components/Profile/Profile";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { AppProvider } from "./context/AppContext";


function App() {
  return (
    <AppProvider>
      <Routes>
        <Route exact path="/" element={<LandingHome />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<CreateUser />} />
        <Route path="/home/createStore" element={<CreateStore />} />
        <Route path="/home/product/:id" element={<ProductDetail />} />
        <Route path="/home/profile" element={<Profile />} />
        <Route exact path="/home/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/home/Favorites" element={<Favorites />} />
      </Routes>   
    </AppProvider>
  );
}

export default App;
