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
            src="https://arturocalle.vtexassets.com/arquivos/ids/473103/HOMBRE-CAMISA-10122546-AZUL-780_1.jpg?v=637950736212900000"
            alt="shirt"
          />
        </div>
        <h3>Tittle</h3>
        <h3>Price</h3>
      </Link>
    </div>
  );
};

export default Card;
