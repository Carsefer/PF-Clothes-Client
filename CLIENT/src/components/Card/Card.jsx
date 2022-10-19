import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFavorite, deleteToFavorites } from "../../redux/actions";
import "./Card.css"

const Card = ({ img, title, price, id, inFavorites }) => {

  const dispatch = useDispatch()

  const handleFavorites = (e) => {
    e.preventDefault();
    dispatch(addToFavorite(id))
  }

  const handleDeleteFavorites = (e) => {
    e.preventDefault();
    dispatch(deleteToFavorites(id))
  }

  return (
    <div className="CardProductHome">
      <Link className="CardProductHomeLink" to={`/Home/Product/${id}`}>
        {
          inFavorites ? 
          <button onClick={(e) => handleDeleteFavorites(e)}>Quitar de Favoritos</button> :
          <button onClick={(e) => handleFavorites(e)}>Añadir a Favoritos</button>
        }
        <div className="CardProductHomeLinkImgContainer">
          <img
            className="CardProductHomeLinkProductImg"
            /*className="w-25 p-3"*/
            src={img}
            alt="img not found"
          />
        </div>
        <div className="CardProductHomeLinkProductTextContainer">
          <h3 className="CardProductHomeProductTitle">{title}</h3>
          <h3 className="CardProductHomeProductPrice">${price}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Card;
