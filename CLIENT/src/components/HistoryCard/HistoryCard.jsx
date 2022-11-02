import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Styles from "./HistoryCard.module.css";

const HistoryCard = ({
  name,
  price,
  id,
  date,
  status,
  amount,
  size,
  color,
  demographic,
}) => {
  const [img, seImg] = useState();

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API || "http://localhost:3001"}/product/${id}`
      );
      seImg(res.data.image);
    })();
  }, img);

  return (
    <div className={Styles.HistoryCardDiv}>
      <Link className={Styles.HistoryCard} to={`/Home/Product/${id}`}>
        <div>
          <img
            className={Styles.HistoryCardImg}
            src={img}
            alt="img not found"
          />
        </div>
        <div className={Styles.HistoryCardText}>
          <h3 className={Styles.HistoryCardName}>
            {name} {size} {color}
          </h3>
          <p className={Styles.HistoryCardData}>
            Precio: ${price} Demografia: {demographic} Cantidad: {amount} Fecha:{" "}
            {date} Estado: {status}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default HistoryCard;
