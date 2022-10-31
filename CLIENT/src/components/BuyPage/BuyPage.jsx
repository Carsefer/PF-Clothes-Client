import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "../../Utils/useLocalStorage";
import { buyHistorial } from "../../redux/actions";
import HistoryCard from "../HistoryCard/HistoryCard";

const BuyPage = () => {
    const dispatch = useDispatch();

    const [user, setUser] = useState("");

    useEffect(() => {
        (async () => {
        if (!user) {
            const data = await getUserData();
            setUser(data);
        }
        })();
        dispatch(buyHistorial(user.id));
    }, [user, dispatch, user.id]);

    const historial = useSelector((state) => state?.historial);

    return (
        <div>
            {historial.length ? (
                historial.map((el) => (
                    <HistoryCard 
                        id={el.id}
                        img= {el.img}
                        name= {el.name}
                        price= {el.price}
                        size= {el.size}
                        color= {el.color}
                        demographic= {el.demographic}
                        date= {el.date}
                        status= {el.status}
                        amount= {el.amount}
                    />
                ))
            ) : (
                <label>Aun no tienes compras.</label>
            )}
        </div>
    );
}

export default BuyPage;