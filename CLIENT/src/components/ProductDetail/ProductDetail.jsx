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
  const [info, setInfo] = useState("");
  const [us, setUs] = useState({});

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

  const detail = useSelector((state) => state.productDetail);
  const reviews = useSelector((state) => state.productReviews);
  const favorites = useSelector((state) => state.favorites);

  console.log("hola");
  console.log(reviews);

  const handleFav = () => {
    dispatch(addToFavorites(id));
    alert("Producto agregado a favoritos!");
  };
  const handleDelFav = () => {
    dispatch(deleteFavorite(id));
    alert("Producto eliminado de favoritos");
  };
  const handleAddCart = () => {
    dispatch(addToCart(id, profileId));
    alert("Producto agregado");
  };
  const sizes = detail.variants?.map((v) => v.size).join(", ");
  const colors = detail.variants?.map((v) => v.color).join(", ");
  const stock = detail.variants?.map((v) => v.stock).reduce((a, b) => a + b);

  return (
    <div className={Style.detailsContainer}>
      <div className={Style.sectionDetails}>
        <button className={Style.backButton} onClick={() => navigate("/home")}>
          Atrás
        </button>
        <button
          className={Style.buttonCartDetail}
          onClick={() => handleAddCart()}
        >
          <img src={buttonCart} alt="cart-button"></img>
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
            <p>Talles: {sizes}</p>
            <p>Marca: {detail.brand ? detail.brand : " - "}</p>
            <p>Color: {colors}</p>
            <p>Material: {detail.materials ? detail.materials : " - "}</p>
            <p>Quedan {stock} unidades disponibles</p>
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
