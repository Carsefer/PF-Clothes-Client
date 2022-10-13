import React from 'react';
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <img src="#" alt="logo" />
            <div>
                <Link to="/Home/Login">
                    <button>Iniciar Sesión</button>
                </Link>
                |
                <Link to="/Home/SignUp">
                    <button>Registrarse</button>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;