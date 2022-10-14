import React from "react";
import "./Home.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import NavBar from "../NavBar/NavBar";

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
      <div className="productos">        
        {/* queda comentado lo que usaremos cuando esté hecha la ruta que trear productos*/
        /* {allProducts?.map(p => 
        <Card
        key={p.id}
        id={p.id}
        img={p.img}
        title={p.title}
        price={p.price}
        />
        )} */}
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
