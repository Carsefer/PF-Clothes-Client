import React from "react";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import LandingDetail from "../LandingDetail/LandingDetail";
import { Container } from "react-bootstrap";
export default function LandingHome() {
  return (
    <div>
      <Container>
        <h1 className="">Welcome to Express Clothes</h1>
        <h4>Buy or increase your store selling Clothes</h4>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <Link to="/home">
            <button className="btn btn-warning me-md-2 btn-lg">
              Enter to Shop
            </button>
          </Link>
          <Link to="/register">
            <button className="btn btn-warning me-md-2 btn-lg">
              Create a Store
            </button>
          </Link>
        </div>
        <LandingDetail />
      </Container>
      <Footer />
    </div>
  );
}
