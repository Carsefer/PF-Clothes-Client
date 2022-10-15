import React from 'react';
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <div>
                <img src="#" alt="logo" />
                <Link to="/login">
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