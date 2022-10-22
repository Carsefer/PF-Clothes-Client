import { React, useEffect, useState,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../Searchbar/SearchBar";
import Styles from "./NavBar.module.css";
import Logo from "../images/express-fashion-stores.svg";
import Cart from "../images/cart.svg";
import Star from "../images/icono-estrella.png";
import Profile from "../images/profile.svg";
import { getSession } from "../../sessionUtils/jwtSession";
import axios from "axios";
import { session } from "../../context/Session";

const handleSession = async (jwt,google,user,cb) => {
  if(google){
    cb(google);
  }else if(await jwt()){
    cb(jwt);
  }
}

const NavBar = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const userObject = useContext(session);

  useEffect(() => {
    (async () => {
      /*if(!user && userObject){
        setUser(userObject);
      }

      if (!user && !userObject) {
        const data = await getSession();
        setUser(data);  
      }*/
      
      await handleSession(getSession,userObject,user,setUser);

    })();
  }, []);

  console.log(userObject);

  const handleLogout = (e) => {

    setUser("");
    sessionStorage.removeItem("sessionData");
    

    axios.get("http://localhost:3001/auth/logout",{withCredentials:true}).then(res => {
      if(res.data === "done"){
        window.location.href = "/"
      }
    })

    navigate("/");
  };

  console.log(user);
  return (
    <nav className={Styles.NavbarHome}>
      <div className={Styles.NavbarHomeContainer}>
        <Link to="/">
          <img className={Styles.NavbarHomeLogo} src={Logo} alt="logo" />
        </Link>
        <SearchBar />

        {/* si el usuario no esta logueado mostrar login y signup
                en caso contrario mostrar el usuario logueado y boton de 
            cerrar sesion */}
        {!user ? (
          <div className={Styles.NavbarHomeFormsButtonsContainer}>
            <Link to="/login">
              <button className={Styles.NavbarHomeButtons}>
                Iniciar Sesión
              </button>
            </Link>
            <Link to="/register">
              <button className={Styles.NavbarHomeButtons}>Registrarse</button>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/home/ShoppingCart">
              <img className={Styles.CartIcon} src={Cart}></img>
            </Link>
            <Link to="/home/Favorites">
              <img className={Styles.CartIcon} src={Star} />
            </Link>
            <Link to="/home/profile">
              <img className="" src={Profile}></img>
            </Link>
            <div>
              {/* username */}
              <p>{user.username}</p>
              <button
                className="NavbarHomeButtons"
                onClick={(e) => {
                  handleLogout(e);
                }}
              >
                Cerrar Sesión
              </button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
