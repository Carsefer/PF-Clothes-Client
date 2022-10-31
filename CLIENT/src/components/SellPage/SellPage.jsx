import React from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

const SellPage = () => {

    return (
        <div>
            <div>
                <Link to="">VENTAS</Link>
                <Link to="products">PRODUCTOS</Link>
                <Link to="reviews">RESEÑAS</Link>
            </div>
            <Routes>
                <Route/>
            </Routes>
        </div>
    );
}

export default SellPage;