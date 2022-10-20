import { useEffect, useState } from "react";
import axios from "axios";

import NavBar from "../NavBar/NavBar";
import Style from "./Profile.module.css";
import { Link } from "react-router-dom";

export default function Profile() {
  const [us, setUs] = useState({});

  const url =
    "http://localhost:3001/user/get/3a8c449c-853b-45cb-ae89-4d19e062d7ab";
  useEffect(() => {
    (async function () {
      let data = await axios.get(url);
      setUs(data.data);
    })();
  }, [url]);
  console.log(us);
  return (
    <>
      <NavBar />
      <div className={Style.profileContainer}>
        <div className={Style.sectionProfile}>
          <div className={Style.sectionContainer}>
            <div className={Style.profileInformation}>
              <h1>Datos: </h1>
              <p>Nombre: {us.name}</p>
              {us.storeName ? <p>Tienda: {us.storeName}</p> : null}
              <p>Correo: {us.mail}</p>
              <p>Telefono: {us.phone}</p>
              <p>Localidad: {us.location}</p>
            </div>
            <div>
              {!us.storeName ? (
                <Link to="/home/createStore">
                  <button className={Style.buttonProfile}>Crear Tienda</button>
                </Link>
              ) : (
                <button className={Style.buttonProfile}>Editar</button>
              )}
            </div>
            <img
              className={Style.pictureProfile}
              src={us.profilePicture}
              alt={us.username}
            />

            <h1 className={Style.titleUsername}>{us.username}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
