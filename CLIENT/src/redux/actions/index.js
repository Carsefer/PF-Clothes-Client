import axios from "axios";
import { GET_PRODUCTS,
         GET_PRODUCT_DETAIL,
         GET_SIZES,
         GET_MARKS,
         ORDER_PRODUCTS_BY_NAME,
         ORDER_PRODUCTS_BY_SCORE,
         FILTER_PRODUCTS,
         LOGIN_USER,
         CREATER_USER,
         CREATE_PUBLICATION, } from "../action-types";


export const getProducts = () => {
    return async function (dispatch) {
        const products = await axios.get("http://localhost:3001/products")
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

export const filterProducts = ({ type, value }) => {
    return async function (dispatch) {
        const filteredProducts = await axios.get(`http://localhost:3001/products/filter/${type}?value=${value}`)
        dispatch({
            type: FILTER_PRODUCTS,
            payload: filteredProducts.data
        })
    }
}

/* export const filterProductsByMark = (mark) => {
    return async function (dispatch) {
        const filteredProductsByMark = await axios.get("http://localhost:3001/productMarks" + mark)
        dispatch({
            type: FILTER_PRODUCTS_BY_MARK,
            payload: filteredProductsByMark.data
        })
    }
}

export const filterProductsByDemography = (demo) => {
    return async function (dispatch) {
        const filteredProductsByDemography = await axios.get("http://localhost:3001/productDemos" + demo)
        dispatch({
            type: FILTER_PRODUCTS_BY_DEMOGRAPHY,
            payload: filteredProductsByDemography.data
        })
    }
}

export const filterProductsByLocation = (location) => {
    return async function (dispatch) {
        const filteredProductsByLocation = await axios.get("http://localhost:3001/productLocation" + location)
        dispatch({
            type: FILTER_PRODUCTS_BY_LOCATION,
            payload: filteredProductsByLocation.data
        })
    }
}

export const filterProductsByType = (type) => {
    return async function (dispatch) {
        const filteredProductsByType = await axios.get("http://localhost:3001/productTypes" + type)
        dispatch({
            type: FILTER_PRODUCTS_BY_TYPE,
            payload: filteredProductsByType.data
        })
    }
}

export const filterProductsByPrice = (price) => {
    return async function (dispatch) {
        const filteredProductsByPrice = await axios.get("http://localhost:3001/productPrices" + price)
        dispatch({
            type: FILTER_PRODUCTS_BY_PRICE,
            payload: filteredProductsByPrice.data
        })
    }
} */

export const loginUser = (userInfo) => {
    return async function (dispatch) {
        dispatch({
            type: LOGIN_USER,
            payload: userInfo
        })
    }
}

export const createUser = () => {
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

