import React from 'react';
import { Link } from "react-router-dom"
import SearchBar from "../Searchbar/SearchBar";
import "./NavBar.css"
import Logo from "../images/express-fashion-stores.svg"
import Cart from "./cart.svg"

const NavBar = () => {
    return (
        <nav className='NavbarHome'>
            <div className='NavbarHomeContainer'>
                <img className='NavbarHomeLogo' src={Logo} alt="logo" />
                <SearchBar/>
                <Link className="" to="/home/ShoppingCart" >
                <img  src={Cart}></img>
                </Link>
                <div className='NavbarHomeFormsButtonsContainer'>
                
                    <Link to="/login">
                        <button className='NavbarHomeButtons' >Iniciar Sesión</button>
                    </Link>
                    <Link to="/home/signup">
                        <button className='NavbarHomeButtons'>Registrarse</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;