import axios from "axios";
import { GET_PRODUCTS,
         GET_PRODUCT_DETAIL,
         GET_SIZES,
         GET_MARKS,
         ORDER_PRODUCTS_BY_NAME,
         ORDER_PRODUCTS_BY_SCORE,
         CREATE_USER } from "../action-types";

export const getProducts = () => {
    return async function (dispatch) {
        const products = await "products"
        dispatch({
            type: GET_PRODUCTS,
            payload: products
        })
    }
}

export const getProductDetail = (id) => {
    return async function (dispatch) {
        const detail = await axios.get(`http://localhost:3001/products/${id}`)
        dispatch({
            type: GET_PRODUCT_DETAIL,
            payload: detail.data
        })
    }
}

export const getSizes = () => {
    return async function (dispatch) {
        const sizes = await axios.get(`http://localhost:3001/sizes`)
        dispatch({
            type: GET_SIZES,
            payload: sizes.data
        })
    }
}

export const getMark = () => {
    return async function (dispatch) {
        const marks = await axios.get(`http://localhost:3001/marks`)
        dispatch({
            type: GET_MARKS,
            payload: marks.data
        })
    }
}

export const orderProductsByName = (orden) => {
    return async function (dispatch) {
        dispatch({
            type: ORDER_PRODUCTS_BY_NAME,
            payload: orden
        })
    }
}

export const orderProductsByScore = (orden) => {
    return async function (dispatch) {
        dispatch({
            type: ORDER_PRODUCTS_BY_SCORE,
            payload: orden
        })
    }
}
//formulario de registro
export const post_create_user = () => {
 return async (dispatch) => {
    const res = await axios.post (`http://localhost:3001/register`);
    return dispatch ({type: CREATE_USER, payload:res.data})
 };
};