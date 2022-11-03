import { useDispatch } from "react-redux";
import { modifyUser } from "../../redux/actions";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { validateUser } from "../../sessionUtils/jwtSession";
import { getUserData } from "../../Utils/useLocalStorage";
import Styles from "./EditUser.module.css";

const EditUser = () => {
  const toast = (text) =>
    Toastify({
      text: text,
      duration: 2000,
      position: "center",
      className: Styles.toast,
      backgroundColor: "#32CD32",
    }).showToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  useEffect(() => {
    (async () => {
      if (!user) {
        const data = await getUserData();
        setUser(data?.id);
      }
    })();
  }, [user]);

  const token = validateUser();

  return (
    <div className={Styles.container11}>
      <button className={Styles.BackButtons} onClick={() => navigate(-1)}>
        Atrás
      </button>
      <h1 className={Styles.subtitle1}>Datos :</h1>
      <Formik
        initialValues={{
          id: "",
          name: "",
          lastname: "",
          mail: "",
          phone: "",
          username: "",
        }}
        validate={(value) => {
          let errors = {};
          if (!value.username.length) {
            errors.username = "Ingrese nombre de usuario";
          } else if (value.username.length < 6 || value.username.length > 15) {
            errors.username =
              "Longitud valida desde 6 caracteres hasta 15 caracteres";
          } else if (!/[A-Za-z0-9_]{6,15}$/.test(value.username)) {
            errors.username = `Nombre de usuario invalido debe iniciar con caracteres
            alfanumericos y solamente puede contener guiones bajos en le nombre de usuario`;
          } else if (!value.name.length) {
            errors.name = "Ingrese su nombre";
          } else if (!value.lastname.length) {
            errors.lastname = "Ingrese su apellido";
          } else if (!/[A-Za-z]$/.test(value.lastname)) {
            errors.lastname = `Apellido invalido,no puede contener numeros`;
          } else if (!/[A-Za-z]$/.test(value.name)) {
            errors.name = `Nombre invalido,no puede contener numeros`;
          } else if (!/^\d[0-9,$]*$/.test(value.phone) || !value.phone) {
            errors.phone = "Ingrese numero de telefono valido";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value.mail)
          ) {
            errors.mail = "Ingrese un correo valido";
          }
          return errors;
        }}
        onSubmit={(data, { resetForm }) => {
          let { id, name, lastname, mail, phone, username } = data;
          id = user;
          name = `${name} ${lastname}`;
          const a = {
            id,
            name,
            lastname,
            mail,
            phone,
            username,
          };
          console.log(a);

          dispatch(modifyUser(token, a)).then(async () => {
            try {
              const res = await axios.get(
                `${
                  process.env.REACT_APP_API || "http://localhost:3001"
                }/user/get?secret_token=${token}`
              );
              console.log(res.data);
              window.localStorage.setItem("userData", JSON.stringify(res.data));
              toast("Exitoso");
            } catch (err) {
              console.log(err.message);
            }
          });

          setTimeout(() => {
            resetForm();
            navigate("/home/profile").then(window.location.reload());
          }, 2000);
        }}
      >
        {({
          handleSubmit,
          errors,
          values,
          touched,
          handleChange,
          handleBlur,
        }) => (
          <form className={Styles.form1} onSubmit={handleSubmit}>
            <div className={Styles.entry1}>
              <div className={Styles.column1}>
                <input
                  type="text"
                  id="username"
                  placeholder="Usuario"
                  name="username"
                  className={Styles.form11}
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onKeyUp={handleBlur}
                  required
                  autoComplete="off"
                />
                {touched.username && errors.username && (
                  <div className={Styles.error}>
                    {" "}
                    <span>{errors.username}</span>{" "}
                  </div>
                )}
                <input
                  type="text"
                  id="name"
                  placeholder="Nombre"
                  name="name"
                  className={Styles.form11}
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  autoComplete="off"
                />
                {touched.name && errors.name && (
                  <div className={Styles.error}>
                    {" "}
                    <span>{errors.name}</span>{" "}
                  </div>
                )}

                <input
                  type="text"
                  id="lastname"
                  placeholder="Apellido"
                  name="lastname"
                  className={Styles.form11}
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onKeyUp={handleBlur}
                  required
                  autoComplete="off"
                />
                {touched.lastname && errors.lastname && (
                  <div className={Styles.error}>
                    {" "}
                    <span>{errors.lastname}</span>{" "}
                  </div>
                )}
                <input
                  type="text"
                  id="mail"
                  placeholder="Correo"
                  name="mail"
                  className={Styles.form11}
                  value={values.mail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  autoComplete="off"
                />
                {touched.mail && errors.mail && (
                  <div className={Styles.error}>
                    {" "}
                    <span>{errors.mail}</span>{" "}
                  </div>
                )}
                <input
                  type="text"
                  id="phone"
                  placeholder="Numero"
                  name="phone"
                  className={Styles.form11}
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onKeyUp={handleBlur}
                  required
                  autoComplete="off"
                />
                {touched.phone && errors.phone && (
                  <div className={Styles.error}>
                    {" "}
                    <span>{errors.phone}</span>{" "}
                  </div>
                )}
                <div>
                  {!values.name ||
                  !values.lastname ||
                  !values.username ||
                  !values.phone ||
                  !values.mail ? (
                    <div>
                      <button className={Styles.btnDisabled22} disabled>
                        Editar producto
                      </button>
                    </div>
                  ) : (
                    <div>
                      <button type="submit" className={Styles.submit22}>
                        Editar producto
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default EditUser;
