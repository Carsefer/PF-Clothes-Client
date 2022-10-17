import React from "react";
import "./Home.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, emptyDetail } from "../../redux/actions";
import Card from "../Card/Card";
import NavBar from "../NavBar/NavBar";
import Filters from "../Filters/Filters";
import Footer from "../Footer/Footer";


export default function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.products);
  const results = useSelector(state => state.productsStatus);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(emptyDetail());
  }, [dispatch]);

  return (
    <div className="Home">
      <NavBar />
      <div className="ProductsHomeContainer">
        <div className="ProductsHome">
          <Filters />
          <div className="ProductsHomeProductsCard">
            { allProducts.length ? allProducts.map((p) => (
            <Card
              key={p.id}
              id={p.id}
              img={p.image}
              title={p.name[0].toUpperCase() + p.name.substring(1)}
              price={p.price}
            />
            )) :  <div>
                    <p>{results}</p>
                  </div>}
          </div>
        </div>
      </div>
    </div>
  );
}
