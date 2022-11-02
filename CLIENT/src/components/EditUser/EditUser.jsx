import { useDispatch } from "react-redux";
import { createStore, modifyUser } from "../../redux/actions";
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
      <h1 className={Styles.subtitle1}>Datos :</h1>
      <Formik
        initialValues={{
          id: "",
          name: "",
          mail: "",
          phone: "",
          username: "",
        }}
        validate={(value) => {
          let errors = {};

          return errors;
        }}
        onSubmit={(data, { resetForm }) => {
          let { id, name, mail, phone, username } = data;
          id = user;
          const a = {
            id,
            name,
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
            } catch (err) {
              console.log(err.message);
            }
          });

          setTimeout(() => {
            toast("Exitoso");
            resetForm();
            navigate("/home/profile").then(window.location.reload());
          }, 200);
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
                  id="name"
                  placeholder="Nombre"
                  name="name"
                  className={Styles.form11}
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onKeyUp={handleBlur}
                  required
                  autoComplete="off"
                />

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
                <></>
                <input
                  type="text"
                  id="username"
                  placeholder="Usurario"
                  name="username"
                  className={Styles.form11}
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onKeyUp={handleBlur}
                  required
                  autoComplete="off"
                />

                <div>
                  <div>
                    <button type="submit" className={Styles.submit22}>
                      Editar Usuario
                    </button>
                  </div>
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
