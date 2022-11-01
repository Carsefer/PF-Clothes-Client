import React from "react";
import { Link } from "react-router-dom";
import Styles from "./HistoryCard.module.css"

const HistoryCard = ({img, name, price, id, date, status, amount, size, color, demographic}) => {
    
    return (
        <div className={Styles.HistoryCard}>
            <Link to={`/Home/Product/${id}`}>
                <div>
                <img
                    src={img}
                    alt="img not found"
                />
                </div>
                <div>
                <h3>{name} {size} {color}</h3>
                <h3>Precio: ${price}</h3>
                <h3>Demografia: {demographic}</h3>
                <h3>Cantidad: {amount}</h3>
                <h3>Fecha: {date}</h3>
                <h3>Estado: {status}</h3>
                </div>
            </Link>
        </div>
    );
}

export default HistoryCard;