import React from "react";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./LandingHome.css";
import { Container } from "react-bootstrap";

export default function LandingHome() {
  return (
    <div>
        <div className="BackgroundImage"></div>
        <div className="LandingContainer">
          <h1 className="LandingTitle">Welcome to Express Clothes</h1>
          <h4 className="LandingSubTitle">Buy or increase your store selling Clothes</h4>
          <div className="LandingButtons" /*className="d-grid gap-2 d-md-flex justify-content-md-start"*/>
            <Link to="/home">
              <button className="LandingButton" /*className="btn btn-warning me-md-2 btn-lg"*/>
                Enter to Shop
              </button>
            </Link>
            <Link to="/register">
              <button className="LandingButton" /*className="btn btn-warning me-md-2 btn-lg"*/>
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
