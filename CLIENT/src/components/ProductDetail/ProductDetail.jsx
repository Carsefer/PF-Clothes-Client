import React, { useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
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

  const sizes = detail.variants.map( v => v.size).join(", ");
  const colors = detail.variants.map( v => v.color).join(", ");
  const stock = detail.variants.map( v => v.stock).reduce((a,b) => a + b);

  return (
    <div className={Style.detailsContainer}>
      <div className={Style.sectionDetails}>
        <button onClick={() => dispatch(addToCart(id))}>
          <FaCartPlus />
          Agregar
        </button>
        {!favorites.find((f) => f.id === id) ? (
          <button onClick={handleFav}>Agregar a favoritos</button>
        ) : (
          <button onClick={handleDelFav}>Eliminar de favoritos</button>
        )}
        <br />
        <h1 className={Style.detailsTitle}>{detail.name?.charAt(0).toUpperCase() + detail.name?.slice(1)}</h1>
        <div className={Style.article__details}>
          <div className={Style.articleDetailsImage}>
            <img src={detail.image} alt="img not found" />
          </div>
          <div className={Style.article_details_container}>
            <p>Precio: ${detail.price}</p>
            <p>Talles: {sizes}</p>
            <p>Marca: {detail.brand?detail.brand:" - "}</p>
            <p>Color: {colors}</p>
            <p>Material: {detail.materials?detail.materials:" - "}</p>
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
