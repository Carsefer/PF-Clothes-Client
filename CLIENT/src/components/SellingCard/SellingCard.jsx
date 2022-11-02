import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../redux/actions";
import Styles from "./SellingCard.module.css";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const SellingCard = ({ img, name, price, id, size, color, demographic, isActivate }) => {
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
    dispatch(deleteProduct(id)).then(toast("Producto desactivado","yellow"));
  };

  return (
    <div className={Styles.SellingCardDiv}>
      <Link className={Styles.SellingCard} to={`/Home/Product/${id}`}>
        <div>
          <img
            className={Styles.SellingCardImg}
            src={img}
            alt="img not found"
          />
        </div>
        <div className={Styles.SellingCardText}>
          <h3 className={Styles.SellingCardName}>{name} {size} {color}</h3>
          <p className={Styles.SellingCardData}>Precio: ${price}   Demografia: {demographic}</p>
        </div>
      </Link>
      <Link to={`/home/editProduct/${id}`}>
      <button>Modificar</button>
      </Link>
      {!isActivate ? <button onClick={() => handleDesactivate()}>Desactivar</button> : <button>Activar</button>}
    </div>
  );
};

export default SellingCard;
