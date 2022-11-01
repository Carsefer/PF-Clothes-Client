import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Styles from "./SellingCard.module.css"

const SellingCard = ({name, price, id, size, color, demographic}) => {
    const [img, seImg] = useState()

    useEffect(() => {
        (async () => {
            const res = await axios.get(`http://localhost:3001/product/${id}`)
            seImg(res.data.image);
        })();
    }, img)

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
                <h3>{name} {size} {color}</h3>
                <h3>Precio: ${price}</h3>
                <h3>Demografia: {demographic}</h3>
                </div>
            </Link>
            <button>Modificar</button>
        </div>
    );
}

export default SellingCard;