import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../../redux/actions";
import "./ProductDetail.css"
import Comments from "../Comments/Comments";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  const detail = useSelector(state => state.productDetail);

  return (
    <div className="detailsContainer">
      <div className="sectionDetails">
        <h1 className="detailsTitle">{detail.name}</h1>
        <div className="article__details">
          <div className="articleDetailsImage">
            <img src={detail.image} alt="img not found" />
          </div>
          <div className="article_details_container">
      
            <p>Precio: ${detail.price}</p>
      
      
            <p>Talle: {detail.size}</p>
      
            <p>Marca: {detail.brand}</p>
      
            <p>Color: {detail.color}</p>
      
            <p>Material: {detail.materials}</p>
     
            <p>Quedan {detail.stock} unidades disponibles</p>
      
          </div>
          <div>
            <Comments/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;