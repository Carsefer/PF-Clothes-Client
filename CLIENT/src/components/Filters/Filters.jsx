import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getSizes, 
         getMarks,
         filterProducts } from '../../redux/actions';

const Filters = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSizes())
        dispatch(getMarks())
    }, [dispatch])

    const sizes = useSelector(state => state.sizes)
    const marks = useSelector(state => state.marks)
    const demographies = []
    const types = []
    const locations = []

    const handleSelect = (e) => {
        e.preventDefault()
        if (e.target.value.length) {
            const values = e.target.value.split("-")
            const filter = {
                type: values[0],
                value: values[1]
            }
            dispatch(filterProducts(filter))
        }
    }

    return (
        <div>
            <select onChange={(e) => handleSelect(e)}>
                <option value="">Filtrar por Talle</option>
                {
                    sizes.length ? sizes.map(s => {
                        return (
                            <option value={`size-${s}`}>{s}</option>
                        )
                    }) : <option value=""></option>
                }
            </select>
            <select onChange={(e) => handleSelect(e)}>
                <option value="">Filtrar por Marca</option>
                {
                    marks.length ? marks.map(m => {
                        return (
                            <option value={`mark-${m}`}>{m}</option>
                        )
                    }) : <option value=""></option>
                }
            </select>
            <select onChange={(e) => handleSelect(e)}>
                <option value="">Filtrar por Genero</option>
                {
                    demographies.length ? demographies.map(demo => {
                        return (
                            <option value={`demography-${demo}`}>{demo}</option>
                        )
                    }) : <option value=""></option>
                }
            </select>
            <select onChange={(e) => handleSelect(e)}>
                <option value="">Filtrar por Tipo</option>
                {
                    types.length ? types.map(type => {
                        return (
                            <option value={`type-${type}`}>{type}</option>
                        )
                    }) : <option value=""></option>
                }
            </select>
            <select onChange={(e) => handleSelect(e)}>
                <option value="">Filtrar por Localización</option>
                {
                    locations.length ? locations.map(location => {
                        return (
                            <option value={`location-${location}`}>{location}</option>
                        )
                    }) : <option value=""></option>
                }
            </select>
        </div>
    );
};

export default Filters;