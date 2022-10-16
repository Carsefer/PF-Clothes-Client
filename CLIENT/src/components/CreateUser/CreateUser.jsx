import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/actions";
import { Formik } from "formik";

import { useNavigate, Link } from "react-router-dom";
import "./CreateUser.css";

const CreateUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="subtitle ">Register User</h1>
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          email: "",
          password: "",
          passwords: "",
          phone: "",
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
          <form className="form">
            <div className="entry">
              <div className="column">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  name="name"
                  className="form1"
                  value={values.name}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  id="lastname"
                  placeholder="Last Name"
                  name="lastname"
                  className="form1"
                  value={values.lastname}
                  onChange={handleChange}
                />

                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="email"
                  className="form1"
                  value={values.email}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  name="password"
                  className="form1"
                  value={values.password}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  id="repassword"
                  placeholder="Retype Password"
                  name="passwords"
                  className="form1"
                  value={values.passwords}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter a number phone"
                  name="phone"
                  className="form1"
                  value={values.phone}
                  onChange={handleChange}
                />
                <div>
                  {!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                    values.email
                  ) ||
                  !values.password ||
                  values.passwords !== values.password ? (
                    <div>
                      <button className="btnDisabled2" disabled>
                        Sign up
                      </button>
                    </div>
                  ) : (
                    <div>
                      <button type="submit" className="submit2">
                        Sign up
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
      <p className="footer">
        Have an account ?{" "}
        <Link className="lognin" to="/login">
          Log in
        </Link>{" "}
        instead.
      </p>
    </div>
  );
};
export default CreateUser;
