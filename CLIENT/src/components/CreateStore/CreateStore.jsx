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
  const [avatar, setAvatar] = useState("");
  const [profileBanner, setProfileBanner] = useState("");

  useEffect(() => {
    (async () => {
      if (!user) {
        const data = await getUserData();
        setUser(data?.id);
      }
    })();
  }, [user]);

  const token = validateUser();

  console.log(user);

  return (
    <div className={Styles.container1}>
      <h1 className={Styles.subtitle}>Crear una tienda</h1>
      <Formik
        initialValues={{
          id: "",
          storeName: "",
          location: "",
        }}
        validate={(value) => {
          let errors = {};

          return errors;
        }}
        onSubmit={(data, { resetForm }) => {
          //handleSubmit(data);
          /*let {storeName,location} = data;
          axios.post(`/user/update?secret_token=${token}`,{
            id:user,
            storeName,
            banner:profileBanner,
            location,
            profilePicture : avatar,
          }).then((res) => {
            console.log(res);
          })*/ let { storeName, location } = data;

          dispatch(
            createStore(token, {
              id: user,
              storeName,
              banner: profileBanner,
              location,
              profilePicture: avatar,
            })
          )
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
            })
            .then(function (res) {
              console.log(res);
              alert("Exitoso");
            });

          setTimeout(() => {
            resetForm();
            navigate("/home/profile").then(window.location.reload());
          }, 4000);
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
                  onChange={(e) => {
                    e.preventDefault();
                    const reader = new FileReader();
                    reader.readAsDataURL(e.target.files[0]);
                    reader.onloadend = () => {
                      let avatarData = reader.result;
                      setAvatar(avatarData);
                    };
                    console.log(avatar);
                  }}
                  onBlur={handleBlur}
                  onKeyUp={handleBlur}
                  required
                  autoComplete="off"
                />
                <div className={Styles.articleDetailsImageContainer}>
                  <img
                    className={Styles.articleDetailsImage}
                    src={avatar}
                    alt=""
                  />
                </div>
                <>
                  <label>Banner</label>
                </>
                <input
                  type="file"
                  id="banner"
                  name="banner"
                  className={Styles.inputFile}
                  value={values.banner}
                  onChange={(e) => {
                    e.preventDefault();
                    const reader = new FileReader();
                    reader.readAsDataURL(e.target.files[0]);
                    reader.onloadend = () => {
                      let bannerData = reader.result;
                      setProfileBanner(bannerData);
                    };
                    console.log(profileBanner);
                  }}
                  onBlur={handleBlur}
                  onKeyUp={handleBlur}
                  required
                  autoComplete="off"
                />
                <div className={Styles.articleDetailsImageContainer}>
                  <img
                    className={Styles.articleDetailsImage}
                    src={profileBanner}
                    alt=""
                  />
                </div>
                <div>
                  {!values.location || !values.storeName ? (
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
