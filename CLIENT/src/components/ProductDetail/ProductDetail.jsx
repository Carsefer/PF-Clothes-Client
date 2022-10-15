import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../../redux/actions";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  const detail = useSelector(state => state.productDetail)[0];

  return (
    <div>
      <img src={detail.image} alt="img not found" />
      <h1>{detail.name}</h1>
      <h2>{detail.price}</h2>
      <p>{detail.size}</p>
      <p>{detail.brand}</p>
      <p>{detail.materials}</p>
      <p>{detail.color}</p>
      <p>{detail.stock}</p>
    </div>
  );
};

export default ProductDetail;
