import React from "react";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Styles from "./LandingHome.module.css";

export default function LandingHome() {
  return (
    <div>
        <div className={Styles.BackgroundImage}></div>
        <div className={Styles.LandingContainer}>
          <h1 className={Styles.LandingTitle}>Welcome to Express Clothes</h1>
          <h4 className={Styles.LandingSubTitle}>Buy or increase your store selling Clothes</h4>
          <div className={Styles.LandingButtons} /*className="d-grid gap-2 d-md-flex justify-content-md-start"*/>
            <Link to="/home">
              <button className={Styles.LandingButton} /*className="btn btn-warning me-md-2 btn-lg"*/>
                Enter to Shop
              </button>
            </Link>
            <Link to="/register">
              <button className={Styles.LandingButton} /*className="btn btn-warning me-md-2 btn-lg"*/>
                Create a Store
              </button>
            </Link>
          </div>
          {/* <LandingDetail /> */}
        </div>
      <Footer />
    </div>
  );
}
