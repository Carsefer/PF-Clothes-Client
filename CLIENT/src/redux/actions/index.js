import axios from "axios";
import {
  GET_PRODUCTS,
  GET_PRODUCT_DETAIL,
  EMPTY_DETAIL,
  SEARCH_PRODUCT,
  GET_SIZES,
  ORDER_PRODUCTS_BY_NAME,
  ORDER_PRODUCTS_BY_SCORE,
  FILTER_PRODUCTS,
  LOGIN_USER,
  CREATE_USER,
  CREATE_PUBLICATION,
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
  GET_REVIEWS_PRODUCT_DETAIL,
  FLUSH_ERROR,
} from "../action-types";

export const getProducts = () => {
  return async function (dispatch) {
    const products = await axios.get("http://localhost:3001/product/all");
    dispatch({
      type: GET_PRODUCTS,
      payload: products.data,
    });
  };
};

export const getProductDetail = (id) => {
  return async function (dispatch) {
    const detail = await axios.get(`http://localhost:3001/product/${id}`);
    dispatch({
      type: GET_PRODUCT_DETAIL,
      payload: detail.data,
    });
  };
};

export const getProductDetailReviews = (id) => {
  return async function (dispatch) {
    const reviews = await axios.get(`http://localhost:3001/product/review/${id}`)
    dispatch({
      type: GET_REVIEWS_PRODUCT_DETAIL,
      payload: reviews.data,
    });
  };
};

export const emptyDetail = () => {
  return {
    type: EMPTY_DETAIL,
  };
};

export const searchProduct = (name) => {
  return async function (dispatch) {
    const json = await axios.get(`http://localhost:3001/product/?search=${name}`);
    dispatch({
      type: SEARCH_PRODUCT,
      payload: json.data,
    });
  };
};

export const getSizes = () => {
  return async function (dispatch) {
    const sizes = await axios.get(`http://localhost:3001/sizes`);
    dispatch({
      type: GET_SIZES,
      payload: sizes.data,
    });
  };
};

export const orderProductsByName = (orden) => {
  return async function (dispatch) {
    dispatch({
      type: ORDER_PRODUCTS_BY_NAME,
      payload: orden,
    });
  };
};

export const orderProductsByScore = (orden) => {
  return async function (dispatch) {
    dispatch({
      type: ORDER_PRODUCTS_BY_SCORE,
      payload: orden,
    });
  };
};

export const filterProducts = (price, size, demographic) => {
  return async function (dispatch) {
    const filteredProducts = await axios.get(
      `http://localhost:3001/product/filter?price=${price}&size=${size}&demographic=${demographic}`
    );
    dispatch({
      type: FILTER_PRODUCTS,
      payload: filteredProducts.data,
    });
  };
};

export const loginUser = (userInfo) => {
  return async function (dispatch) {
    axios.post('http://localhost:3001/login',userInfo).then(
      function({data}){
        dispatch({
          type:LOGIN_USER,
          payload:null,
        })
        sessionStorage.setItem('sessionData',JSON.stringify(data));
      },
      function(err){
        dispatch({
          type: LOGIN_USER,
          payload: err.response.data,
        });
      }
    );
  };
};

export const createUser = (data) => {
  return async (dispatch) => {
    const res = await axios.post(`http://localhost:3001/user`, data);
    return dispatch({
      type: CREATE_USER,
      payload: res.data,
    });
  };
};

export const createPublication = () => {
  return async (dispatch) => {
    const res = await axios.post(`/publication`);
    return dispatch({
      type: CREATE_PUBLICATION,
      payload: res.data,
    });
  };
};

export const addToCart = (id) => ({ type: ADD_TO_CART, payload: id });

export const delFromCart = (id, all = false) =>
  all
    ? { type: REMOVE_ALL_FROM_CART, payload: id }
    : { type: REMOVE_ONE_FROM_CART, payload: id };

export const clearCart = () => ({ type: CLEAR_CART });

export const flushError = () => {
  return async (dispatch) => {
    dispatch({
      type:FLUSH_ERROR,
      payload:null,
    })
  } 
}


