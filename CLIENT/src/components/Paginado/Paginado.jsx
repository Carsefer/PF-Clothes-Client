import React from "react";

export default function Paginado ({productsPerPage, allProducts, paginado}) {
    const pageNumbers = [];
    for (let i = 0; i < Math.ceil(allProducts/productsPerPage); i++) {
        pageNumbers.push(i+1);
    }

    return (
        <nav>
            <ul>
                {pageNumbers?.map( n =>
                    <li key={n} onClick={() => paginado(n)}>
                        {n}
                    </li>)}
            </ul>
        </nav>
    )
}