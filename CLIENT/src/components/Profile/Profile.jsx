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

  console.log(historial);

  var repetidos = {};

  historial.forEach(function (numero) {
    repetidos[numero.productoId] = (repetidos[numero.productoId] || 0) + 1;
  });

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
                <>
                  <Link to="/home/editUser">
                    <button className={Style.buttonProfile}>Editar</button>
                  </Link>
                  <Link to="/home/createProduct">
                    <button className={Style.buttonProfile}>
                      Crear Producto
                    </button>
                  </Link>
                </>
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
            {historial
              .reduce((arr, el) => {
                if (!arr.find((d) => d.productoId === el.productoId)) {
                  arr.push(el);
                }

                return arr;
              }, [])
              .map((el) => (
                <div>
                  Prenda: {el.name}
                  Precio: {el.price}
                  Talle: {el.size}
                  Color: {el.color}
                  Demografia: {el.demographic}
                  Fecha: {el.updatedAt.slice(0, 10)}
                  Estado: {el.status}
                  Cantidad: {repetidos[el.productoId]}
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
