import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"

const Card = ({ img, title, price, id }) => {
  return (
    <div className="CardProductHome">
      <Link className="CardProductHomeLink" to={`/Home/Product/${id}`}>
        <div className="CardProductHomeLinkImgContainer">
          <img
            className="CardProductHomeLinkProductImg"
            /*className="w-25 p-3"*/
            src={img}
            alt="img not found"
          />
        </div>
        <div className="CardProductHomeLinkProductTextContainer">
          <h3 className="CardProductHomeProductTitle">{title}</h3>
          <h3 className="CardProductHomeProductPrice">${price}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Card;
