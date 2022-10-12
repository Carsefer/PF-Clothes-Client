import React from 'react';
import { useDispatch } from "react-redux";
import { orderProductsByName, orderProductsByScore } from '../../redux/actions';

const Orders = () => {

    const dispatch = useDispatch()

    const handleSelectName = (e) => {
        e.preventDefault();
        if (e.target.value.length) {
            dispatch(orderProductsByName(e.target.value))
        }
    }

    const handleSelectScore = (e) => {
        e.preventDefault();
        if (e.target.value.length) {
            dispatch(orderProductsByScore(e.target.value))
        }
    }

    return (
        <div>
            <select onChange={(e) => handleSelectName(e)}>
                <option value="">Ordenar por Nombre</option>
                <option value="ascendente">A-Z</option>
                <option value="descendente">Z-A</option>
            </select>
            <select onChange={(e) => handleSelectScore(e)}>
                <option value="">Ordenar por Calificación</option>
                <option value="ascendente">Menor a Mayor</option>
                <option value="descendente">Mayor a Menor</option>
            </select>
        </div>
    );
};

export default Orders;