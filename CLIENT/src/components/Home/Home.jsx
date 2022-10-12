import React from "react";
import "./Home.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

export default function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="home">
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <div className="productos">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
