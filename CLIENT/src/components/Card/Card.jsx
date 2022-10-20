import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFavorite, deleteToFavorites } from "../../redux/actions";
import CardStyles from "./Card.module.css";

const Card = ({ img, title, price, id, inFavorites }) => {

  const dispatch = useDispatch()

  // const handleFavorites = (idFav) => {
  //   idFav.preventDefault();
  //   dispatch(addToFavorite(idFav))
  // }

  // const handleDeleteFavorites = (idDelete) => {
  //   idDelete.preventDefault();
  //   dispatch(deleteToFavorites(idDelete))
  // }

  return (
    <div className={CardStyles.CardProductHome}>
      <Link className={CardStyles.CardProductHomeLink} to={`/Home/Product/${id}`}>
        {/* {
          inFavorites ? 
          <button onClick={(e) => handleDeleteFavorites(id)}>Quitar de Favoritos</button> :
          <button onClick={(e) => handleFavorites(id)}>Añadir a Favoritos</button>
        } */}
        <div className={CardStyles.CardProductHomeLinkImgContainer}>
          <img
            className={CardStyles.CardProductHomeLinkProductImg}
            /*className="w-25 p-3"*/
            src={img}
            alt="img not found"
          />
        </div>
        <div className={CardStyles.CardProductHomeLinkProductTextContainer}>
          <h3 className={CardStyles.CardProductHomeProductTitle}>{title}</h3>
          <h3 className={CardStyles.CardProductHomeProductPrice}>${price}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Card;
