import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { getUserData } from "../../Utils/useLocalStorage";

const SellingProducts = () => {
    const [user, setUser] = useState(null);
    const [products, setProducts] = useState([])

    useEffect(() => {
        (async () => {
            if (!user) {
              const data = await getUserData();
              setUser(data);
            }
            const res = await axios.get(`http://localhost:3001/user/onSell/${user?.id}`);
            console.log(res);
            setProducts(res);
        })();
    }, [user])

    return (
        <h1>sad</h1>
    );
}

export default SellingProducts;