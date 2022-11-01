import { useDispatch } from "react-redux";
import { createStore } from "../../redux/actions";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Styles from "./CreateStore.module.css";
import { validateUser } from "../../sessionUtils/jwtSession";
import { getUserData } from "../../Utils/useLocalStorage";

const CreateStore = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [file, setFile] = useState();
  const [filename,setFilename] = useState("");

  useEffect(() => {
    (async () => {
      if (!user) {
        const data = await getUserData();
        setUser(data?.id);
      }
    })();
  }, [user]);

  const token = validateUser();

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    console.log(file);
    console.log(filename);
  };

  return (
    <div className={Styles.container1}>
      <h1 className={Styles.subtitle}>Crear una tienda</h1>
      <Formik
        initialValues={{
          id: "",
          storeName: "",
          banner: "",

          location: "",
        }}
        validate={(value) => {
          let errors = {};

          return errors;
        }}
        onSubmit={(data, { resetForm }) => {
          const formData = new FormData();
          formData.append = ("file", file,filename);
           console.log(formData);
          const a = {
            id: user,
            storeName: data.storeName,
            banner: data.banner,
            profilePicture: formData,
            location: data.location,
          };

         

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
          <form className={Styles.form} onSubmit={handleSubmit}>
            <div className={Styles.entry}>
              <div className={Styles.column}>
                <input
                  type="text"
                  id="storeName"
                  placeholder="Nombre de la Tienda"
                  name="storeName"
                  className={Styles.form1}
                  value={values.storeName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onKeyUp={handleBlur}
                  required
                  autoComplete="off"
                />

                <input
                  type="text"
                  id="location"
                  placeholder="Localidad"
                  name="location"
                  className={Styles.form1}
                  value={values.location}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  autoComplete="off"
                />
                <label>Foto de perfil</label>
                <input
                  type="file"
                  id="profilePicture"
                  name="profilePictures"
                  className={Styles.inputFile}
                  value={values.profilePicture}
                  onChange={(e) => saveFile(e)}
                  onBlur={handleBlur}
                  onKeyUp={handleBlur}
                  required
                  autoComplete="off"
                />
                <>
                  <label>Banner</label>
                </>
                <input
                  type="file"
                  id="banner"
                  name="banner"
                  className={Styles.inputFile}
                  value={values.banner}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onKeyUp={handleBlur}
                  required
                  autoComplete="off"
                />

                <div>
                  {/*!values.profilePicture ||*/
                  !values.location ||
                  !values.banner ||
                  !values.storeName ? (
                    <div>
                      <button className={Styles.btnDisabled2} disabled>
                        Crear tienda
                      </button>
                    </div>
                  ) : (
                    <div>
                      <button type="submit" className={Styles.submit2}>
                        Crear tienda
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
export default CreateStore;
