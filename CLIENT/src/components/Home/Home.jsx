import React from "react";
import Styles from "./Home.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts, emptyDetail } from "../../redux/actions";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Card from "../Card/Card";
import NavBar from "../NavBar/NavBar";

export default function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  const results = useSelector((state) => state.productsStatus);

  const {
    setPrice,
    setSize,
    setDemographic,
    setColor,
    setName,
    price,
    size,
    demographic,
    color,
    name,
  } = useContext(AppContext);

  //const [cant, setCant] = useState("");

  useEffect(() => {
    dispatch(filterProducts(name, price, size, demographic, color));
    dispatch(emptyDetail());
  }, [dispatch, name, price, size, demographic, color]);

  //Paginado
  // const [currentPage, setCurrentPage] = useState(1);
  // //Acá se define la cantidad de productos que aparecerán por pantalla.
  // const productsPerPage = 12;
  // const indexOfLastproduct = currentPage * productsPerPage;
  // const indexOfFirstproduct = indexOfLastproduct - productsPerPage;
  // const currentProducts = allProducts.slice(
  //   indexOfFirstproduct,
  //   indexOfLastproduct
  // );
  // const paginado = (pageNum) => {
  //   setCurrentPage(pageNum);
  // };

  //SEARCH
  const filterByName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

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

  //SHOW ALL
  const handleClickShowAll = (e) => {
    e.preventDefault();
    setPrice("");
    setSize("");
    setDemographic("");
    setColor("");
    setName("");
    dispatch(filterProducts(name, price, size, demographic, color));
  };

  //PAGINATED
  // const start = (e) => {
  //   e.preventDefault();
  //   setCant(0);
  // };

  // const prev = (e) => {
  //   e.preventDefault();
  //   setCant(cant - 1);
  // };

  // const next = (e) => {
  //   e.preventDefault();
  //   setCant(cant + 1);
  // };

  return (
    <div className={Styles.Home}>
      <NavBar />
      <div className="ProductsHomeContainer">
        <div className="ProductsHome">
          <div className="FilterProductsHome">
            <select
              className="FilterProductsHomeSelect"
              value={size}
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
              className={Styles.FilterProductsHomeSelect}
              value={demographic}
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
              className={Styles.FilterProductsHomeSelect}
              value={price}
              onChange={(e) => filterByPrice(e)}
            >
              <option value="">Filtrar por Precio</option>
              <option value="25">hasta 25$</option>
              <option value="50">hasta 50$</option>
              <option value="75">hasta 75$</option>
              <option value="100">hasta 100$</option>
            </select>

            <select
              className={Styles.FilterProductsHomeSelect}
              value={color}
              onChange={(e) => filterByColor(e)}
            >
              <option value="">Filtrar por Color</option>
              <option value="Gris">Gris</option>
              <option value="Negro">Negro</option>
              <option value="Blanco">Blanco</option>
              <option value="Azul">Azul</option>
              <option value="Amarillo">Amarillo</option>
            </select>

            <input
              class={Styles.FilterProductsHomeSelect}
              id="text"
              type="text"
              value={name}
              placeholder="Buscar productos..."
              onChange={(e) => filterByName(e)}
            />

            <button
              class={Styles.FilterProductsHomeSelect}
              onClick={(e) => {
                handleClickShowAll(e);
              }}
            >
              Mostrar todo
            </button>
          </div>

          <div className={Styles.ProductsHomeProductsCard}>
            {allProducts.length ? (
              allProducts.map((p) => (
                <Card
                  key={p.id}
                  id={p.id}
                  img={p.image}
                  title={p.name[0].toUpperCase() + p.name.substring(1)}
                  price={p.price}
                />
              ))
            ) : (
              <div>
                <p>{results}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
