import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"

const Card = ({ img, title, price, id }) => {
  return (
    <div className="CardProductHome">
      <Link className="CardProductHomeLink" to={`/Home/Product/${id}`}>
        <div className="CardProductHomeImgContainer">
          <img
            className="CardProductHomeProductImg"
            /*className="w-25 p-3"*/
            src={img}
            alt="img not found"
          />
        </div>
        <h3>{title}</h3>
        <h3>${price}</h3>
      </Link>
    </div>
  );
};

export default Card;
