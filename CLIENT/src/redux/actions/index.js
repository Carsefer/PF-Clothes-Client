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
  LOGIN,
  LOGOUT,
  LOGOUT_USER,
  CREATE_USER,
  CREATE_STORE,
  CREATE_PUBLICATION,
  GET_FAVORITES,
  ADD_TO_FAVORITES,
  DELETE_FAVORITE,
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
  GET_REVIEWS_PRODUCT_DETAIL,
  FLUSH_ERROR,
  GET_SELLS_HISTORY,
} from "../action-types";

export const getProducts = () => {
  return async function (dispatch) {
    const products = await axios.get("https://pf-cloth-2022.herokuapp.com/product/all");
    dispatch({
      type: GET_PRODUCTS,
      payload: products.data,
    });
  };
};

export const getProductDetail = (id) => {
  return async function (dispatch) {
    const detail = await axios.get(`https://pf-cloth-2022.herokuapp.com/product/${id}`);
    dispatch({
      type: GET_PRODUCT_DETAIL,
      payload: detail.data,
    });
  };
};

export const getProductDetailReviews = (id) => {
  return async function (dispatch) {
    const reviews = await axios.get(
      `https://pf-cloth-2022.herokuapp.com/product/review/${id}`
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
      `https://pf-cloth-2022.herokuapp.com/product/?search=${name}`
    );
    dispatch({
      type: SEARCH_PRODUCT,
      payload: json.data,
    });
  };
};

export const getSizes = () => {
  return async function (dispatch) {
    const sizes = await axios.get(`https://pf-cloth-2022.herokuapp.com/sizes`);
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
      `https://pf-cloth-2022.herokuapp.com/product/filter?name=${name}&price=${price}&size=${size}&demographic=${demographic}&color=${color}&page=${page}&sortBy=${sortBy}&orderBy=${orderBy}`
    );
    dispatch({
      type: FILTER_PRODUCTS,
      payload: filteredProducts.data,
    });
  };
};

export const loginUser = (userInfo) => {
  return async function (dispatch) {
    await axios.post("https://pf-cloth-2022.herokuapp.com/login", userInfo).then(
      function ({ data }) {
        dispatch({
          type: LOGIN_USER,
          payload: data,
        });
        dispatch({
          type: LOGIN,
          payload: true,
        });
        return Promise.resolve();
    },
      function (err) {
        return Promise.reject();
      }
    );
  };
};

export const loginOut = () => {
  return async (dispatch) => {
    dispatch({
      type: LOGOUT,
      payload: false,
    });
    dispatch({
      type: LOGOUT_USER,
      payload: {},
    })
  };
};

export const createUser = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`https://pf-cloth-2022.herokuapp.com/user`, data);
      return dispatch({
        type: CREATE_USER,
        payload: res.data,
      }); 
    } catch (error) {
      alert(error)
    }
  };
};
let id = "b181bed3-1e13-4ce0-ab57-95241b83a8dd";
export const createStore = (data) => {
  return async (dispatch) => {
    const res = await axios.put(`https://pf-cloth-2022.herokuapp.com/user/${id}`, data);
    return dispatch({
      type: CREATE_STORE,
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

export const getFavorites = () => {
  return {
    type: GET_FAVORITES,
  };
};

export const addToFavorites = (id) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: id,
  };
};

export const deleteFavorite = (id) => {
  return {
    type: DELETE_FAVORITE,
    payload: id,
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

export const delFromCart = (id, all = false) =>
  all
    ? { type: REMOVE_ALL_FROM_CART, payload: id }
    : { type: REMOVE_ONE_FROM_CART, payload: id };

export const clearCart = () => ({ type: CLEAR_CART });

export const flushError = () => {
  return async (dispatch) => {
    dispatch({
      type: FLUSH_ERROR,
      payload: null,
    });
  };
};

export const getSellsHistory = () => {
  return async (dispatch) => {
    const history = await axios.get("https://pf-cloth-2022.herokuapp.com/sellsHistory")
    dispatch({
      type: GET_SELLS_HISTORY,
      payload: history.data
    })
  }
}
