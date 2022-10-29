import { Route, Routes } from "react-router-dom";
import CreateStore from "./components/CreateStore/CreateStore";
import CreateUser from "./components/CreateUser/CreateUser";
import Favorites from "./components/Favorites/Favorites";
import axios from "axios";
import { useEffect } from "react";
import Home from "./components/Home/Home";
import LandingHome from "./components/LandingHome/LandingHome";
import Login from "./components/Login/Login";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Profile from "./components/Profile/Profile";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Stadistics from "./components/Stadistics/Stadistics";
import Forgot from './components/Forgot/Forgot';
import Reset from './components/Reset/Reset';
import { validateUser } from "./sessionUtils/jwtSession";
import { useLocalStorage } from "./Utils/useLocalStorage";
import {
  ProtectedRoute,
  ProtectedRoutes,
} from "./components/ProtectedRoute/ProtectedRoute";
import EditUser from "./components/EditUser/EditUser";

function App() {
  const [user, setUser] = useLocalStorage("userData");
  useEffect(() => {
    (async () => {
      if (!user) {
        const token = validateUser();
        try {
          const res = await axios.get(
            `${
              process.env.REACT_APP_API || "http://localhost:3001"
            }/user/get?secret_token=${token}`
          );
          console.log(res.data);
          setUser(res.data);
        } catch (err) {
          console.log(err.message);
        }
      }
    })();
  }, [user, setUser]);

  return (
    <Routes>
      <Route index element={<LandingHome />} />
      <Route exact path="/" element={<LandingHome />} />
      <Route exact path="/home" element={<Home />} />
      <Route element={<ProtectedRoutes user={user} />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<CreateUser />} />
      </Route>
      <Route element={<ProtectedRoute user={user} />}>
        <Route path="/home/Favorites" element={<Favorites />} />
        <Route path="/home/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/home/profile" element={<Profile />} />
        <Route path="/home/stadistics" element={<Stadistics />} />
        <Route path="/home/createStore" element={<CreateStore />} />
        <Route path="/home/editUser" element={<EditUser />} />
      </Route>
      <Route path="/home/product/:id" element={<ProductDetail />} />
      <Route path="/forgot" element={<Forgot/>}/>
      <Route path="/reset" element={<Reset/>}/>
    </Routes>
  );
}

export default App;
