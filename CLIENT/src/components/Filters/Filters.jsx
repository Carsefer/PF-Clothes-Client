import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getSizes, getMarks } from '../../redux/actions';

const Filters = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSizes())
        dispatch(getMarks())
    }, [dispatch])

    const sizes = useSelector(state => state.sizes)
    const marks = useSelector(state => state.marks)

    return (
        <div>
            <select onChange={(e) => handleSelectSize(e)}>
                <option value="">Filtrar por Talle</option>
                {
                    sizes.length ? sizes.map(s => {
                        return (
                            <option value={s}>{s}</option>
                        )
                    }) : <option value=""></option>
                }
            </select>
            <select onChange={(e) => handleSelectMark(e)}>
                <option value="">Filtrar por Marca</option>
                {
                    marks.length ? marks.map(m => {
                        return (
                            <option value={m}>{m}</option>
                        )
                    }) : <option value=""></option>
                }
            </select>
        </div>
    );
};

export default Filters;