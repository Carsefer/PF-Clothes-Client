import React from "react";
import { useDispatch } from "react-redux";
import Card from "../Card/Card";
import { deleteFavorite } from "../../redux/actions";

const FavItem = ({img, title, price, id}) => {
    const dispatch = useDispatch();

    return (
        <div>
        <Card
            img={img}
            title={title}
            price={price}
            id={id}
        />
        <button onClick={() => dispatch(deleteFavorite(id))}>X</button>
        </div>
    )
}

export default FavItem;