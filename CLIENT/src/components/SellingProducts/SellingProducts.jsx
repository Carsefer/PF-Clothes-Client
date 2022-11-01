import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { getUserData } from "../../Utils/useLocalStorage";
import SellingCard from "../SellingCard/SellingCard";

const SellingProducts = () => {
    const [user, setUser] = useState(null);
    const [products, setProducts] = useState([])

    useEffect(() => {
        (async () => {
            if (!user) {
              const data = await getUserData();
              setUser(data);
            }
            axios.get(`http://localhost:3001/user/onSell/${user.id}`).then(res => {
                setProducts(res.data)
            })
        })();
    }, [user])

    return (
        <div>
            {products.length ? (
                products
                    .map((el) => (
                        <SellingCard
                            id={el.id}
                            name= {el.name}
                            price= {el.price}
                            size= {el.size}
                            color= {el.color}
                            demographic= {el.demographic}
                        />
                    ))
                ) : (
                <label>Aun no tienes productos en venta.</label>
                )}
        </div>
    );
}

export default SellingProducts;