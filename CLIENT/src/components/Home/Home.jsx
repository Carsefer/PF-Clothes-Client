import React from "react";
import Styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, emptyDetail } from "../../redux/actions";
import Card from "../Card/Card";
import NavBar from "../NavBar/NavBar";
import Filters from "../Filters/Filters";
import Paginado from "../Paginado/Paginado";

export default function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.products);
  const results = useSelector(state => state.productsStatus);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(emptyDetail());
  }, [dispatch]);

  //Paginado
  const [currentPage, setCurrentPage] = useState(1);
  //Acá se define la cantidad de productos que aparecerán por pantalla.
  const productsPerPage = 12;
  const indexOfLastproduct = currentPage * productsPerPage;
  const indexOfFirstproduct = indexOfLastproduct - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstproduct, indexOfLastproduct);
  const paginado = pageNum => {
    setCurrentPage(pageNum);
  }

  return (
    <div className={Styles.Home}>
      <NavBar />
      <div className={Styles.ProductsHomeContainer}>
        <div className={Styles.ProductsHome}>
          <Filters />
          <Paginado
          productsPerPage={productsPerPage}
          allProducts={allProducts.length}
          paginado={paginado}
          />
          <div className={Styles.ProductsHomeProductsCard}>
            {allProducts.length ? (
              currentProducts.map((p) => (
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
