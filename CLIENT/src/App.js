import { Route, Routes } from "react-router-dom";
import CreateStore from "./components/CreateStore/CreateStore";
import CreateUser from "./components/CreateUser/CreateUser";
import Favorites from "./components/Favorites/Favorites";
//import axios from "axios";
import { useEffect } from "react";
import Home from "./components/Home/Home";
import LandingHome from "./components/LandingHome/LandingHome";
import Login from "./components/Login/Login";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Profile from "./components/Profile/Profile";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Stadistics from "./components/Stadistics/Stadistics";
import { getSession } from "./sessionUtils/jwtSession";
import { useLocalStorage } from "./Utils/useLocalStorage";
import {
  ProtectedRoute,
  //ProtectedRoutes,
} from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const [user, setUser] = useLocalStorage(null);

  useEffect(() => {
    (async () => {
      if (!user) {
        const data = await getSession();
        if (data) {
          setUser(data);
        }
      }
    })();
  }, [user, setUser]);

  return (
    <Routes>
      <Route index element={<LandingHome />} />
      <Route exact path="/" element={<LandingHome />} />
      <Route exact path="/home" element={<Home />} />
      {/* <Route element={<ProtectedRoutes us={us} />}> */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<CreateUser />} />
      {/* </Route> */}
      <Route element={<ProtectedRoute user={user} />}>
        <Route path="/home/Favorites" element={<Favorites />} />
        <Route path="/home/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/home/profile" element={<Profile />} />
        <Route path="/home/stadistics" element={<Stadistics />} />
        <Route path="/home/createStore" element={<CreateStore />} />
      </Route>
      <Route path="/home/product/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
