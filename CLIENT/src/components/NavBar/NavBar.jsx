import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom"
import SearchBar from "../Searchbar/SearchBar";
import Styles from "./NavBar.module.css";
import Logo from "../images/express-fashion-stores.svg";
import Cart from "../images/cart.svg";
import Star from "../images/icono-estrella.png";
import Profile from "../images/profile.svg";
const {getSession} = require('../../utils/getSession');
import { loginOut } from '../../redux/actions';

const NavBar = () => {
    const login = useSelector(state => state.login);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleLogout = (e) => {
    dispatch(loginOut()).then(() => {
      navigate("/home");
    });
  };

  console.log(user);
  return (
    <nav className={Styles.NavbarHome}>
      <div className={Styles.NavbarHomeContainer}>
        <Link to="/"><img className={Styles.NavbarHomeLogo} src={Logo} alt="logo" /></Link>
        <SearchBar />

        {/* si el usuario no esta logueado mostrar login y signup
                en caso contrario mostrar el usuario logueado y boton de 
            cerrar sesion */}
        {!login ? (
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
              <img className={Styles.StarIcon} src={Star} />
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
