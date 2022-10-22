import React from "react";
import { useDispatch } from "react-redux";
import Card from "../Card/Card";
import { deleteFavorite } from "../../redux/actions";
import Style from "./favItem.module.css"
import buttonDelete from "../images/Delete.svg"
const FavItem = ({img, title, price, id}) => {
    const dispatch = useDispatch();

    return (
        <div className={Style.artilce_FavItem}>
         <div className={Style.FavItem}>  
        <Card
            img={img}
            title={title}
            price={price}
            id={id}
        />
        </div> 
        <button className={Style.buttonDeleteFav} onClick={() => dispatch(deleteFavorite(id))}><img src={buttonDelete}></img></button>
        </div>
    )
}

export default FavItem;