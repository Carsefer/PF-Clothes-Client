import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../redux/actions";
import "./Filters.css";

const Filters = () => {
  const dispatch = useDispatch();

  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [demographic, setDemographic] = useState("");
  const [color, setColor] = useState("");

  //const [cant, setCant] = useState("");

  useEffect(() => {
    dispatch(filterProducts(price, size, demographic, color));
  }, [dispatch, price, size, demographic, color]);

  //FILTER PRICE
  const filterByPrice = (e) => {
    e.preventDefault();
    setPrice(e.target.value);
  };

  //FILTER SIZE
  const filterBySize = (e) => {
    e.preventDefault();
    setSize(e.target.value);
  };

  //FILTER DEMOGRAPHIC
  const filterByDemographic = (e) => {
    e.preventDefault();
    setDemographic(e.target.value);
  };

  //FILTER COLOR
  const filterByColor = (e) => {
    e.preventDefault();
    setColor(e.target.value);
  };

  return (
    <div className="FilterProductsHome">
      <select
        className="FilterProductsHomeSelect"
        onChange={(e) => filterBySize(e)}
      >
        <option value="">Filtrar por Talle</option>
        <option value="XXXL">XXXL</option>
        <option value="XXL">XXL</option>
        <option value="XL">XL</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XXS">XXS</option>
        <option value="XXXS">XXXS</option>
      </select>

      <select
        className="FilterProductsHomeSelect"
        onChange={(e) => filterByDemographic(e)}
      >
        <option value="">Filtrar por Genero</option>
        <option value="adult male">adult male</option>
        <option value="adult female">adult female</option>
        <option value="teen female">teen female</option>
        <option value="teen male">teen male</option>
        <option value="little boy">little boy</option>
        <option value="little girl">little girl</option>
      </select>

      <select
        className="FilterProductsHomeSelect"
        onChange={(e) => filterByPrice(e)}
      >
        <option value="">Filtrar por Precio</option>
        <option value="25">hasta 25$</option>
        <option value="50">hasta 50$</option>
        <option value="75">hasta 75$</option>
        <option value="100">hasta 100$</option>
      </select>

      <select
        className="FilterProductsHomeSelect"
        onChange={(e) => filterByColor(e)}
      >
        <option value="">Filtrar por Color</option>
        <option value="Gris">Gris</option>
        <option value="Negro">Negro</option>
        <option value="Blanco">Blanco</option>
        <option value="Azul">Azul</option>
        <option value="Amarillo">Amarillo</option>
      </select>
    </div>
  );
};

export default Filters;
