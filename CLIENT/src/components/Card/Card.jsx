import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"

const Card = ({ img, title, price, id }) => {
  return (
    <div className="Card">
      <Link className="Link" to={`/Home/Product/${id}`}>
        <div className="ImgContainer">
          <img
            className="ProductIMG"
            /*className="w-25 p-3"*/
            src={img}
            alt="shirt"
          />
        </div>
        <h3>{title}</h3>
        <h3>{price}</h3>
      </Link>
    </div>
  );
};

export default Card;
