import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  getProductDetail,
  addToCart,
  getProductDetailReviews,
  addToFavorites,
  deleteFavorite,
} from "../../redux/actions";
import Style from "./ProductDetail.module.css";
import Comments from "../Comments/Comments";
import { getSession } from "../../utils/getSession";
import buttonCart from "../images/cart.svg";
import buttonFav from "../images/buttonFav.svg";
import buttonDeleteFav from "../images/buttonDeleteFav.svg";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const detail = useSelector((state) => state.productDetail);
  const reviews = useSelector((state) => state.productReviews);
  const favorites = useSelector((state) => state.favorites);

  const [info, setInfo] = useState("");
  const [us, setUs] = useState({});
  const [filterBySize, setFilterBySize] = useState("");
  const [filterByColor, setFilterByColor] = useState("");

  const url = "http://localhost:3001/user/get";
  useEffect(() => {
    (async () => {
      if (!info) {
        const data = await getSession();
        setInfo(data);
      }

      if (info) {
        console.log("info before request", info);
        await axios
          .post(
            url,
            {},
            {
              headers: {
                Authorization: `Bearer ${info.token}`,
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            setUs(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    })();
    dispatch(getProductDetail(id));
    dispatch(getProductDetailReviews(id));
  }, [info, dispatch, id]);
  const profileId = us.id;

  console.log("hola");
  console.log(reviews);

  const handleFav = () => {
    dispatch(addToFavorites(id, profileId));
    alert("Producto agregado a favoritos!");
  };
  const handleDelFav = () => {
    dispatch(deleteFavorite(id));
    alert("Producto eliminado de favoritos");
  };
  const handleAddCart = () => {
    dispatch(addToCart(id, profileId));
    alert("Producto agregado al carrito!");
  };

  //FILTER ACTIVITY
  const handleSize = (e) => {
    e.preventDefault();
    setFilterBySize(e.target.value);
  };

  //FILTER COLOR
  const handleColor = (e) => {
    e.preventDefault();
    setFilterByColor(e.target.value);
  };

  return (
    <div className={Style.detailsContainer}>
      <div className={Style.sectionDetails}>
        <button
          className={Style.buttonCartDetail}
          onClick={() => handleAddCart()}
        >
          <img src={buttonCart}></img>
        </button>
        {!favorites.find((f) => f.id === id) ? (
          <button className={Style.buttonfavDetail} onClick={handleFav}>
            <img src={buttonFav}></img>
          </button>
        ) : (
          <button
            className={Style.buttonDeletefavDetail}
            onClick={handleDelFav}
          >
            <img src={buttonDeleteFav}></img>
          </button>
        )}
        <br />
        <h1 className={Style.detailsTitle}>
          {detail.name?.charAt(0).toUpperCase() + detail.name?.slice(1)}
        </h1>
        <div className={Style.article__details}>
          <div className={Style.articleDetailsImage}>
            <img src={detail.image} alt="img not found" />
          </div>
          <div className={Style.article_details_container}>
            <p>Precio: ${detail.price}</p>
            <p>Seleccionar Talle:</p>
            <select
              class=""
              value={filterBySize}
              onChange={(e) => handleSize(e)}
            >
              {[...new Set(detail.variants?.map((e) => e.size))].length > 1 ? (
                <option value="">Todos</option>
              ) : (
                <p></p>
              )}
              {[...new Set(detail.variants?.map((e) => e.size))]?.map((el) => {
                return <option value={el}>{el}</option>;
              })}
            </select>
            <p>Seleccionar Color:</p>
            <select
              class=""
              value={filterByColor}
              onChange={(e) => handleColor(e)}
            >
              {[...new Set(detail.variants?.map((e) => e.color))].length > 1 ? (
                <option value="">Todos</option>
              ) : (
                <p></p>
              )}
              {[...new Set(detail.variants?.map((e) => e.color))]?.map((el) => {
                return <option value={el}>{el}</option>;
              })}
            </select>
            {detail.brand ? <p>Marca: {detail.brand}</p> : <p></p>}
            {detail.materials ? <p>Material: {detail.materials}</p> : <p></p>}
            {filterByColor && filterBySize ? (
              <p>
                Quedan{" "}
                {detail.variants
                  ?.map(
                    (v) =>
                      v.size === filterBySize &&
                      v.color === filterByColor &&
                      v.stock
                  )
                  .reduce((a, b) => a + b)}{" "}
                unidades
              </p>
            ) : filterBySize ? (
              <p>
                Quedan{" "}
                {detail.variants
                  ?.map((v) => v.size === filterBySize && v.stock)
                  .reduce((a, b) => a + b)}{" "}
                unidades
              </p>
            ) : filterByColor ? (
              <p>
                Quedan{" "}
                {detail.variants
                  ?.map((v) => v.color === filterByColor && v.stock)
                  .reduce((a, b) => a + b)}{" "}
                unidades
              </p>
            ) : (
              <p>
                Quedan{" "}
                {detail.variants?.map((v) => v.stock).reduce((a, b) => a + b)}{" "}
                unidades
              </p>
            )}
          </div>
          <div>
            <h2>Reseñas</h2>
            {reviews.length ? (
              reviews.map((r) => (
                <Comments score={r.score} reviews={r.reviews} />
              ))
            ) : (
              <div>
                <a>No hay reseñas</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

/*
{reviews.map((r) => (
  <Comments 
    score = {r.score}
    review = {r.review}
  />
))}
<Comments/>*/
