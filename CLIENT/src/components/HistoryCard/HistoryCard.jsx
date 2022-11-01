import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Styles from "./HistoryCard.module.css"

const HistoryCard = ({name, price, id, date, status, amount, size, color, demographic}) => {
    const [img, seImg] = useState()

    useEffect(() => {
        (async () => {
            const res = await axios.get(`http://localhost:3001/product/${id}`)
            seImg(res.data.image);
        })();
    }, img)
    
    return (
        <div className={Styles.HistoryCard}>
            <Link to={`/Home/Product/${id}`}>
                <div>
                <img
                    className={Styles.HistoryCardImg}
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