import React from "react";
import { Link } from "react-router-dom";

const Card = ({ img, title, price, id }) => {
  return (
    <div className="container">
      <Link to={`/Home/Product/${id}`}>
        <img
          className="w-25 p-3"
          src="https://arturocalle.vtexassets.com/arquivos/ids/473103/HOMBRE-CAMISA-10122546-AZUL-780_1.jpg?v=637950736212900000"
          alt="shirt"
        />
      </Link>
      <h3>Tittle</h3>
      <h3>Price</h3>
    </div>
  );
};

export default Card;
