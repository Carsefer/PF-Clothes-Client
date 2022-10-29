import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../NavBar/NavBar";
import Style from "./Profile.module.css";
import { Link } from "react-router-dom";
import { getUserData } from "../../Utils/useLocalStorage";
import { buyHistorial } from "../../redux/actions";

export default function Profile() {
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
    <>
      <NavBar />
      <div className={Style.profileContainer}>
        <div className={Style.sectionProfile}>
          <div className={Style.sectionContainer}>
            <div className={Style.profileInformation}>
              <h1>Datos: </h1>
              <p>Nombre: {user.name}</p>
              {user.storeName ? <p>Tienda: {user.storeName}</p> : null}
              <p>Correo: {user.mail}</p>
              <p>Telefono: {user.phone}</p>
              <p>Localidad: {user.location}</p>
            </div>
            <div>
              {!user.storeName ? (
                <Link to="/home/createStore">
                  <button className={Style.buttonProfile}>Crear Tienda</button>
                </Link>
              ) : (
                <button className={Style.buttonProfile}>Editar</button>
              )}
            </div>
            <img
              className={Style.pictureProfile}
              src={user.profilePicture}
              alt={user.username}
            />

            <h1 className={Style.titleusername}>{user.username}</h1>
          </div>
        </div>
        <p>MIS COMPRAS </p>
        {historial.length ? (
          <p>
            {historial?.map((el) => (
              <div>
                Nombre: {el.name}
                Precio: {el.price}
                Talle: {el.size}
                Color: {el.color}
                Demografia: {el.demographic}
                Fecha: {el.date}
                Estado: {el.status}
                Cantidad: {el.amount}
                <a href={`/Home/Product/${el.productoId}`}>
                  <button>Comentar Producto</button>
                </a>
              </div>
            ))}
          </p>
        ) : (
          <p>Aun no tienes compras.</p>
        )}
      </div>
    </>
  );
}
