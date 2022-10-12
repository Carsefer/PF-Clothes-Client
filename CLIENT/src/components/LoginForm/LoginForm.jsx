import React, { useState } from 'react';

const LoginForm = () => {

    const [ userInfo, setUserInfo ] = useState({
        name: "",
        password: ""
    })
    const [ errors, setErrors ] = useState({})

    const handleChange = (e) => {
        e.preventDefault();
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Nombre de Usuario o Correo Electronico</label>
            <input 
                type="text" 
                name="name" 
                onChange={(e) => handleChange(e)}
                value={userInfo.name}></input>  
            <label>Contaseña</label>
            <input 
                type="password" 
                name="password" 
                onChange={(e) => handleChange(e)}
                value={userInfo.password}></input>
            <button type="submit">Iniciar Sesion</button>
        </form>
    );
}

export default LoginForm;