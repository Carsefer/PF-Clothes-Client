import React from "react";
import { useState } from "react";

export default function SearchBar() {
    const [texto, setTexto] = useState("");

    const handleChange = (evento) => {
        setTexto(evento.target.value)
    }

    return (
        <form className="SearchBar">

            <input 
                id="barra"
                type={"text"}
                placeholder="Buscar Productos, Tiendas..."
                onChange={(evento) => handleChange(evento)}
            />

            <input id="buscar" type="submit" value="Buscar" />
        
        </form>
    )
}