import React from "react";
import "./Home.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, emptyDetail } from "../../redux/actions";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import NavBar from "../NavBar/NavBar";
import Filters from "../Filters/Filters";
import SearchBar from "../Searchbar/SearchBar";

export default function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(emptyDetail());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <div className="ProductsHomeContainer">
        <Filters />
        {allProducts?.map((p) => (
          <Card
            key={p.id}
            id={p.id}
            img={p.image}
            title={p.name[0].toUpperCase() + p.name.substring(1)}
            price={p.price}
          />
        ))}
      </div>
    </div>
  );
}
