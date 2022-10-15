import React from "react";
import "./Home.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import NavBar from "../NavBar/NavBar";
import Filters from "../Filters/Filters";
import SearchBar from "../Searchbar/SearchBar";

export default function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  
  return (
    <div className="home">
      <NavBar/>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Filters/>
      <SearchBar/>
      <div className="productos">        
        {allProducts?.map(p => 
        <Card
        key={p.id}
        id={p.id}
        img={p.img}
        title={p.name}
        price={p.price}
        />
        )}
        {/* <Card />
        <Card />
        <Card /> */}
      </div>
    </div>
  );
}
