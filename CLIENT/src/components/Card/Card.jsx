import React from "react";
import { Link } from "react-router-dom";

const Card = ({ img, title, price, id }) => {
  return (
    <div className="container">
      <Link to={`/home/product/${id}`}>
        <img
          className="w-25 p-3"
          src={img}
          alt="img not found"
        />
      </Link>
      <h3>{title}</h3>
      <h4>${price}</h4>
    </div>
  );
};

export default Card;
