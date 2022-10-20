import React, { useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  getProductDetail,
  addToCart,
  getProductDetailReviews,
} from "../../redux/actions";
import Style from "./ProductDetail.module.css";
import Comments from "../Comments/Comments";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProductDetail(id));
    dispatch(getProductDetailReviews(id));
  }, [dispatch, id]);

  const detail = useSelector((state) => state.productDetail);
  const reviews = useSelector((state) => state.productReviews);

  console.log("hola");
  console.log(reviews);

  return (
    <div className={Style.detailsContainer}>
      <div className={Style.sectionDetails}>
        <button onClick={() => navigate(-1)}>Volver atrás</button>

        <button onClick={() => dispatch(addToCart(id))}>
          <FaCartPlus />
          Agregar
        </button>
        <h1 className={Style.detailsTitle}>
          {detail.name?.charAt(0).toUpperCase() + detail.name?.slice(1)}
        </h1>
        <div className={Style.article__details}>
          <div className={Style.articleDetailsImage}>
            <img src={detail.image} alt="img not found" />
          </div>
          <div className={Style.article_details_container}>
            <p>Precio: ${detail.price}</p>
            <p>Talle: {detail.size}</p>
            <p>Marca: {detail.brand}</p>
            <p>Color: {detail.color}</p>
            <p>Material: {detail.materials}</p>
            <p>Quedan {detail.stock} unidades disponibles</p>
          </div>
          <div>
            <h2>Reseñas</h2>
            {reviews.length ? (
              reviews.map((r) => (
                <Comments score={r.score} reviews={r.reviews} />
              ))
            ) : (
              <div>
                <p>No hay reseñas</p>
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
