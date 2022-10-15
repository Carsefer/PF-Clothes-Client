import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    name: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validate = (info) => {
    let error = {};
    if (!info.name) error.name = "Debe rellenar este campo!";
    else if (info.name.length < 4)
      error.name = "El Nombre de Usuario es demasiado corto";
    else if (!info.password) error.password = "Debe rellenar este campo!";
    else if (info.password.length < 4)
      error.password = "La contraseña ingresada es demasiado corta";
    setErrors(error);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
    validate(userInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(userInfo);
    if (!Object.keys(errors).length) {
      //convierte el state de errores en un array y detecta si no hay errores
      dispatch(loginUser({ ...userInfo }));
      setUserInfo({
        name: "",
        password: "",
      });
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>Nombre de Usuario o Correo Electronico</label>
      <input
        type="text"
        name="name"
        onChange={(e) => handleChange(e)}
        value={userInfo.name}
      ></input>
      {errors.hasOwnProperty("name") ? <p>{errors.name}</p> : null}
      <label>Contaseña</label>
      <input
        type="password"
        name="password"
        onChange={(e) => handleChange(e)}
        value={userInfo.password}
      ></input>
      {errors.hasOwnProperty("password") ? <p>{errors.password}</p> : null}
      <button type="submit">Iniciar Sesion</button>
    </form>
  );
};

export default LoginForm;
