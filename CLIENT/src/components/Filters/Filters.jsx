import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../redux/actions";
import "./Filters.css"

const Filters = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch(getSizes())
  //     dispatch(getMark())
  // }, [dispatch])

  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [demographic, setDemographic] = useState("");
  //const [cant, setCant] = useState("");

  useEffect(() => {
    dispatch(filterProducts(price, size, demographic));
  }, [dispatch, price, size, demographic]);

  // const sizes = useSelector(state => state.sizes)
  // const marks = useSelector(state => state.marks)
  // const demographies = []
  // const types = []
  // const locations = []

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

  // const handleSelect = (e) => {
  //   e.preventDefault();
  //   if (e.target.value.length) {
  //     const values = e.target.value.split("-");
  //     const filter = {
  //       type: values[0],
  //       value: values[1],
  //     };
  //     dispatch(filterProducts(filter));
  //   }
  // };

  return (
    <div className="FilterProductsHome">
      <select className="FilterProductsHomeSelect" onChange={(e) => filterBySize(e)}>
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

      <select className="FilterProductsHomeSelect" onChange={(e) => filterByDemographic(e)}>
        <option value="">Filtrar por Genero</option>
        <option value="adult male">adult male</option>
        <option value="adult female">adult female</option>
        <option value="teen female">teen female</option>
        <option value="teen male">teen male</option>
        <option value="little boy">little boy</option>
        <option value="little girl">little girl</option>
      </select>

      <select className="FilterProductsHomeSelect" onChange={(e) => filterByPrice(e)}>
        <option value="">Filtrar por Precio</option>
        <option value="25">hasta 25$</option>
        <option value="50">hasta 50$</option>
        <option value="75">hasta 75$</option>
        <option value="100">hasta 100$</option>
      </select>
    </div>
  );
};

export default Filters;
