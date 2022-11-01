import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "../../Utils/useLocalStorage";
import { getSellsHistory } from "../../redux/actions";
import HistoryCard from "../HistoryCard/HistoryCard";

const SellHistory = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState("");

  useEffect(() => {
    console.log(user?.id);
    (async () => {
      if (!user) {
        const data = await getUserData();
        setUser(data?.id);
      }
    })();

    dispatch(getSellsHistory(user));
  }, [user, dispatch]);

  const historial = useSelector((state) => state?.sellsHistory);

  var repetidos = {};

  historial.forEach(function (numero) {
    repetidos[numero.productoId] = (repetidos[numero.productoId] || 0) + 1;
  });

  return (
    <div>
      {historial.length ? (
        historial
          .reduce((arr, el) => {
            if (!arr.find((d) => d.productoId === el.productoId)) {
              arr.push(el);
            }
            return arr;
          }, [])
          .map((el) => (
            <HistoryCard
              id={el?.productoId}
              name={el?.name}
              price={el?.price}
              size={el?.size}
              color={el?.color}
              demographic={el?.demographic}
              date={el?.updatedAt?.slice(0, 10)}
              status={el?.status}
              amount={repetidos[el?.productoId]}
            />
          ))
      ) : (
        <label>Aun no tienes ventas.</label>
      )}
    </div>
  );
};

export default SellHistory;
