import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../redux/actions";
import Styles from "./SellingCard.module.css";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const SellingCard = ({ img, name, price, id, size, color, demographic }) => {
  const dispatch = useDispatch();
  const toast = (text, color = "#32CD32") =>
    Toastify({
      text: text,
      duration: 1500,
      position: "center",
      className: Styles.toast,
      backgroundColor: color,
    }).showToast();

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
