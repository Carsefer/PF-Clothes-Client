import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FavItem from '../FavItem/FavItem.jsx';
import Style from "./Favorites.module.css"
const Favorites = () => {

    const favorites = useSelector(state => state.favorites)

    return (
        <div className={Style.Container__Fav}>
        <div className={Style.containerFavorites}>
        
            {favorites.length ? favorites.map(cloth => 
               
                <FavItem
                    key={cloth.id}
                    id={cloth.id}
                    img={cloth.image}
                    title={cloth.name[0].toUpperCase() + cloth.name.substring(1)}
                    price={cloth.price}
                    
                />
                      
                )
                : <h1 className={Style.textFav}>Aun no tienes productos favoritos. <Link to="/home">Encontralos!</Link></h1>
            }
        </div>
        </div>
    );
};

export default Favorites;