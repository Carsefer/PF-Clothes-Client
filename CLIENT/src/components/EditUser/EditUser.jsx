import { useDispatch } from "react-redux";
import { createStore } from "../../redux/actions";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { validateUser } from "../../sessionUtils/jwtSession";
import { getUserData } from "../../Utils/useLocalStorage";
import Styles from "./EditUser.module.css";

const EditUser = () => {
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

          dispatch(createStore(token, a))
            .then(function (res) {
              console.log(res);
              alert("Exitoso");
            })
            .then(async () => {
              try {
                const res = await axios.get(
                  `${
                    process.env.REACT_APP_API || "http://localhost:3001"
                  }/user/get?secret_token=${token}`
                );
                console.log(res.data);
                window.localStorage.setItem(
                  "userData",
                  JSON.stringify(res.data)
                );
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
                <>
                 
                </>
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
                  {!values.mail ||
                  !values.phone ||
                  !values.username ||
                  !values.name ? (
                    <div>
                      <button className={Styles.btnDisabled22} disabled>
                        Editar Usuario
                      </button>
                    </div>
                  ) : (
                    <div>
                      <button type="submit" className={Styles.submit22}>
                        Editar Usuario
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