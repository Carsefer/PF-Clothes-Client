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
  CREATE_STORE,
  CREATE_PUBLICATION,
  ADD_TO_FAVORITE,
  GET_FAVORITES,
  DELETE_TO_FAVORITES,
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
    const reviews = await axios.get(
      `http://localhost:3001/product/review/${id}`
    );
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
    const json = await axios.get(
      `http://localhost:3001/product/?search=${name}`
    );
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

export const orderProductsByName = (data) => {
  return {
    type: ORDER_PRODUCTS_BY_NAME,
    payload: data,
  };
};

/* export const orderProductsByScore = (orden) => {
  return async function (dispatch) {
    dispatch({
      type: ORDER_PRODUCTS_BY_SCORE,
      payload: orden,
    });
  };
}; */

export const filterProducts = (
  name,
  price,
  size,
  demographic,
  color,
  page,
  orderBy,
  sortBy
) => {
  return async function (dispatch) {
    const filteredProducts = await axios.get(
      `http://localhost:3001/product/filter?name=${name}&price=${price}&size=${size}&demographic=${demographic}&color=${color}&page=${page}&sortBy=${sortBy}&orderBy=${orderBy}`
    );
    dispatch({
      type: FILTER_PRODUCTS,
      payload: filteredProducts.data,
    });
  };
};

export const loginUser = (userInfo) => {
  return async function (dispatch) {
    axios.post("http://localhost:3001/login", userInfo).then(
      function ({ data }) {
        dispatch({
          type: LOGIN_USER,
          payload: null,
        });
        sessionStorage.setItem("sessionData", JSON.stringify(data));
      },
      function (err) {
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
let id = "b181bed3-1e13-4ce0-ab57-95241b83a8dd";
export const createStore = (data) => {
  return async (dispatch) => {
    const res = await axios.put(`http://localhost:3001/user/${id}`, data);
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

export const getFavorites = (user) => {
  return async (dispatch) => {
    const favorites = axios.get(`http://localhost:3001/${user}/favorites`);
    dispatch({
      type: GET_FAVORITES,
      payload: favorites.data,
    });
  };
};

export const addToFavorite = (id) => {
  return async (dispatch) => {
    dispatch({
      type: ADD_TO_FAVORITE,
      payload: id,
    });
  };
};

export const deleteToFavorites = (id) => {
  return async (dispatch) => {
    dispatch({
      type: DELETE_TO_FAVORITES,
      payload: id,
    });
  };
};

/* export const filterProductsByMark = (mark) => {
    return async function (dispatch) {
        const filteredProductsByMark = await axios.get("http://localhost:3001/productMarks" + mark)
        dispatch({
            type: FILTER_PRODUCTS_BY_MARK,
            payload: filteredProductsByMark.data
        })
    }
}
*/

export const addToCart = (id) => ({ type: ADD_TO_CART, payload: id });
/* 
export const delFromCart = (id, all = false) => {
  all
    ? { type: REMOVE_ALL_FROM_CART, payload: id }
    : { type: REMOVE_ONE_FROM_CART, payload: id };
} */

export const clearCart = () => ({ type: CLEAR_CART });

export const flushError = () => {
  return async (dispatch) => {
    dispatch({
      type: FLUSH_ERROR,
      payload: null,
    });
  };
};
