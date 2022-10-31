import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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

  console.log(historial);

  var repetidos = {};

  historial.forEach(function (numero) {
    repetidos[numero.productoId] = (repetidos[numero.productoId] || 0) + 1;
  });

  return (
    <>
      <div className={Style.profileContainer}>
        <div className={Style.sectionProfile}>
          <div className={Style.sectionContainer}>
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
          <div className={Style.profileInformation}>
              <h1>Datos: </h1>
              <p>Nombre: {user.name}</p>
              {user.storeName ? <p>Tienda: {user.storeName}</p> : null}
              <p>Correo: {user.mail}</p>
              <p>Telefono: {user.phone}</p>
              <p>Localidad: {user.location}</p>
              <Link to="/home/editUser">Edit User</Link>
          </div>
        </div>
      </div>
    </>
  );
}
