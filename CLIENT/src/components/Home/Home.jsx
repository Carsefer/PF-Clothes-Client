import React from "react";
import "./Home.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";

export default function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10; // se puede definir cualquier cantidad
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const paginado = pageNum => {
    setCurrentPage(pageNum)
  }

  return (
    <div className="home">
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <div>
        <Paginado
        productsPerPage={productsPerPage}
        allProducts={allProducts.length}
        paginado={paginado}
        />
      </div>
      <div className="productos">        
        {/* queda comentado lo que usaremos cuando esté hecha la ruta que trear productos*/
        /* {currentProducts?.map(p => 
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
