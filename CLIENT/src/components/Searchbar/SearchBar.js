import React from "react";
import { useState } from "react";

export default function SearchBar() {
    const [texto, setTexto] = useState("");

    const handdleChange = (evento) => {
        setTexto(evento.target.value)
    }

    return (
        <form className="SearchBar">

            <input 
                id="barra"
                type={"text"}
                placeholder="Buscar Producots, Tiendas..."
                onChange={(evento) => handdleChange(evento)}
            />

            <input id="buscar" type="submit" value="Buscar" />
        
        </form>
    )
}