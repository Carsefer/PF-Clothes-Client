import React from 'react';
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <img src="#" alt="logo" />
            <div>
                <Link to="/home/login">
                    <button>Iniciar Sesión</button>
                </Link>
                <Link to="/home/signup">
                    <button>Registrarse</button>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;