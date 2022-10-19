import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProduct } from "../../redux/actions";
import Styles from "./SearchBar.module.css"

export default function SearchBar() {
    const dispatch = useDispatch();
    const [texto, setTexto] = useState("");

    const handleInput = e => {
        setTexto(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(searchProduct(texto));
        setTexto("");
    }

    return (
        <div className={Styles.SearchBar}>
            <input 
                className={Styles.SearchBarInput}
                type="text"
                placeholder="Buscar productos..."
                value={texto}
                onChange={e => handleInput(e)}
                />
            <button className={Styles.SearchBarInputButton} type="submit" onClick={e => handleSubmit(e)}>Buscar</button>
        </div>
    )
}