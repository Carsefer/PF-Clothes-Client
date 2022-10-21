import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSellDetail } from "../../redux/actions/index.js"

const SellDetail = () => {

    const dispatch = useDispatch()
    const { idSell } = useParams()

    useEffect(() => {
        dispatch(getSellDetail(idSell))
    }, [])

    const detail = useSelector(state => state.sellDetail)

    return (
        <div>
            
        </div>
    );
};

export default SellDetail;