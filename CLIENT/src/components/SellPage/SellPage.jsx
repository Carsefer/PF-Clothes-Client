import React from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import SellHistory from "../SellHistory/SellHistory";
import ProfileReviews from "../ProfileReviews/ProfileReviews";
import SellingProducts from "../SellingProducts/SellingProducts";
import Styles from "./SellPage.module.css";

const SellPage = () => {

    return (
        <div className={Styles.Sellpage}>
            <div className={Styles.SellpageLinks}>
                <Link to="">VENTAS</Link>
                <Link to="products">PRODUCTOS</Link>
                <Link to="reviews">RESEÑAS</Link>
            </div>
            <div className={Styles.SellpageRoutes}>
                <Routes>
                    <Route index element={<SellHistory/>}/>
                    <Route path="products" element={<SellingProducts/>}/>
                    <Route path="reviews" element={<ProfileReviews/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default SellPage;