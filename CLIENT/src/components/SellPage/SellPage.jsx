import React from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import SellHistory from "../SellHistory/SellHistory";
import SellingProducts from "../SellingProducts/SellingProducts";
import Styles from "./SellPage.module.css";

const SellPage = () => {

  return (
    <div className={Styles.Sellpage}>
      <div className={Styles.SellpageLinks}>
        <Link className={Styles.SellPageLink} to="">VENTAS</Link>
        <Link className={Styles.SellPageLink} to="products">PRODUCTOS</Link>
      </div>
      <div className={Styles.SellpageRoutes}>
        <Routes>
          <Route index element={<SellHistory />} />
          <Route path="products" element={<SellingProducts />} />
        </Routes>
      </div>
    </div>
  );
};

export default SellPage;
