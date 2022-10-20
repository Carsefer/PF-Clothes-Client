import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { getFavorites } from '../../redux/actions/index.js';
import Card from "../Card/Card.jsx";

const Favorites = () => {

    //const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getFavorites())
    // })

    const favorites = useSelector(state => state.favorites)

    return (
        <div>
            {favorites.length ? favorites.map(cloth =>         
                <Card 
                    key={cloth.id}
                    id={cloth.id}
                    img={cloth.image}
                    title={cloth.name[0].toUpperCase() + cloth.name.substring(1)}
                    price={cloth.price}
                    inFavorites={true}
                />
                )
                : <h1>Tu lista de favoritos está vacía, añade prendas a tu lista y aparecerán aquí</h1>
            }
        </div>
    );
};

export default Favorites;