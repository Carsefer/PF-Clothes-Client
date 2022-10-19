import React from "react";
import "./Paginado.css";

export default function Paginado({productsPerPage, allProducts, paginado}) {
    const pageNumbers = [];

    for (let i = 0; i < allProducts/productsPerPage; i++) {
        pageNumbers.push(i + 1);
    }

    return (
        <nav>
            <ul className="paginado">
                {pageNumbers?.map( n =>
                    <li key={n} onClick={()=> paginado(n)}>{n}</li>
                ) }
            </ul>
        </nav>
    )
}   