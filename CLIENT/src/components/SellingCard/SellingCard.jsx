import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../redux/actions";
import Styles from "./SellingCard.module.css";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const SellingCard = ({ name, price, id, size, color, demographic }) => {
  const [img, seImg] = useState();
  const dispatch = useDispatch();
  const toast = (text, color = "#32CD32") =>
    Toastify({
      text: text,
      duration: 1500,
      position: "center",
      className: Styles.toast,
      backgroundColor: color,
    }).showToast();

  useEffect(() => {
    (async () => {
      const res = await axios.get(`http://localhost:3001/product/${id}`);
      seImg(res.data.image);
    })();
  }, img);

  const handleDesactivate = () => {
    dispatch(deleteProduct(id)).then(toast("Producto desactivado"));
  };
  return (
    <div className={Styles.SellingCard}>
      <Link to={`/Home/Product/${id}`}>
        <div>
          <img
            className={Styles.SellingCardImg}
            src={img}
            alt="img not found"
          />
        </div>
        <div>
          <h3>
            {name} {size} {color}
          </h3>
          <h3>Precio: ${price}</h3>
          <h3>Demografia: {demographic}</h3>
        </div>
      </Link>
      <button>Modificar</button>
      <button onClick={() => handleDesactivate()}>Eliminar</button>
    </div>
  );
};

export default SellingCard;
