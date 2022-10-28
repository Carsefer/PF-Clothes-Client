import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import FavItem from "../FavItem/FavItem.jsx";
import {
  getFavorites,
  deleteFavorite,
  clearFavorites,
} from "../../redux/actions/index.js";
import Style from "./Favorites.module.css";
import NavBar from "../NavBar/NavBar";
import { getSession } from "../../sessionUtils/jwtSession";
import { getUserData } from "../../Utils/useLocalStorage.js";
const Favorites = () => {
  const dispatch = useDispatch();
  const [info, setInfo] = useState("");
  const [user, setUser] = useState(null);
  const favorites = useSelector((state) => state?.favorites);

  useEffect(() => {
    (async () => {
      if (!user) {
        const data = await getUserData();
        const token = await getSession();
        setUser(data);
        setInfo(token);
      }
    })();
    const id = user?.id;
    const token = info?.token;
    dispatch(getFavorites(id, token));
  }, [info, dispatch, user]);
  const profileId = user?.id;
  const token = info?.token;
  console.log(token);
  return (
    <>
      <NavBar />
      <div className={Style.Container__Fav}>
        <div className={Style.containerFavorites}>
          {favorites?.length ? (
            <div>
              <button onClick={() => dispatch(clearFavorites(profileId))}>
                Limpiar Favoritos
              </button>
            </div>
          ) : null}
          ;
          {favorites?.length ? (
            favorites?.map((cloth) => (
              <FavItem
                key={cloth?.id}
                id={cloth?.id}
                img={cloth?.image}
                title={cloth?.name[0].toUpperCase() + cloth?.name.substring(1)}
                price={cloth?.price}
                deleteFavorite={() => {
                  dispatch(deleteFavorite(cloth?.id, profileId, token));
                }}
              />
            ))
          ) : (
            <h1 className={Style.textFav}>
              Aun no tienes productos favoritos.{" "}
              <Link to="/home">Encontralos!</Link>
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Favorites;
