import { Formik } from "formik";
import Styles from './Reset.module.css';
import axios from "axios";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const Reset = () => {
    const handleLogin = (values) => {
        alert("si");
    }
    return(
        <div>
             <div className={Styles.container}>
            <div className={Styles.header}></div>
            <div className={Styles.subtitle}>
            <h2>Olvido de password</h2>
            </div>
            <Formik
            initialValues={{
                email: "",
            }}
            validate={(value) => {
                let errors = {};

                if (!/.*/.test(value.email)) {
                errors.email = "Ingrese un email";
                }
                return errors;
            }}
            onSubmit={(values, { resetForm }) => {
                resetForm();
                handleLogin(values);
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
                <form className={Styles.formulario} onSubmit={handleSubmit}>
                <div className={Styles.entry}>
                    <input
                    type="text"
                    id="email"
                    placeholder="Email"
                    name="email"
                    className={Styles.form1}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    autoComplete="off"
                    />

                    {touched.email && errors.email && (
                    <div className={Styles.errors}>
                        {" "}
                        <span>{errors.username}</span>{" "}
                    </div>
                    )}
                </div>
                {/* VALIDATIONS */}
                {!/.*/.test(values.email) ? (
                    <button className={Styles.btnDisabled} disabled>
                    Enviar email
                    </button>
                ) : (
                    <button type="submit" className={Styles.submit}>
                    Enviar Email
                    </button>
                )}
                </form>
            )}
            </Formik>
        </div>
    </div>
    );
}

export default Reset;