import React from 'react';
import { Link } from "react-router-dom"
import SearchBar from "../Searchbar/SearchBar";
import Styles from "./NavBar.module.css"
import Logo from "../images/express-fashion-stores.svg"
import Cart from "../images/cart.svg"

const NavBar = () => {
    return (
        <nav className={Styles.NavbarHome}>
            <div className={Styles.NavbarHomeContainer}>
                <img className={Styles.NavbarHomeLogo} src={Logo} alt="logo" />
                <SearchBar/>
                <Link to="/home/ShoppingCart" >
                    <img className={Styles.CartIcon} src={Cart}></img>
                </Link>
                <div className={Styles.NavbarHomeFormsButtonsContainer}>
                
                    <Link to="/login">
                        <button className={Styles.NavbarHomeButtons} >Iniciar Sesión</button>
                    </Link>
                    <Link to="/home/signup">
                        <button className={Styles.NavbarHomeButtons}>Registrarse</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;