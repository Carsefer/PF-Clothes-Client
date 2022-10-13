import axios from "axios";
import { GET_PRODUCTS,
         GET_PRODUCT_DETAIL,
         GET_SIZES,
         GET_MARKS,
         ORDER_PRODUCTS_BY_NAME,
         ORDER_PRODUCTS_BY_SCORE,
         LOGIN_USER,
         CREATER_USER,
         CREATE_PUBLICATION, } from "../action-types";

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

export const loginUser = (userInfo) => {
    return async function (dispatch) {
        dispatch({
            type: LOGIN_USER,
            payload: userInfo
        })
    }
}

export const createrUser = () => {
    return async (dispatch) => {
        const res = await axios.post(`/register`);
        return dispatch({ 
            type: CREATER_USER, 
            payload: res.data });
      };
}

export const createPublication = () => {
    return async (dispatch) => {
        const res = await axios.post(`/publication`);
        return dispatch({ 
            type: CREATE_PUBLICATION, 
            payload: res.data });
      };
}

