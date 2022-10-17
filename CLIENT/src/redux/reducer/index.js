import {
  GET_PRODUCTS,
  GET_PRODUCT_DETAIL,
  SEARCH_PRODUCT,
  GET_SIZES,
  GET_MARKS,
  ORDER_PRODUCTS_BY_NAME,
  ORDER_PRODUCTS_BY_SCORE,
  FILTER_PRODUCTS,
  CREATE_USER,
  CREATE_PUBLICATION,
  EMPTY_DETAIL,
  LOGIN_USER,
} from "../action-types";

const initialState = {
  products: [],
  productsAux: [],
  productDetail: [],
  sizes: [],
  marks: [],
  productsStatus: "loading",
  session:{
    status:"no logged",
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        productsAux: action.payload,
      };
    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };
    case EMPTY_DETAIL:
      return {
        ...state,
        productDetail: [],
      };
    case SEARCH_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case GET_SIZES:
      return {
        ...state,
        sizes: action.payload,
      };
    case GET_MARKS:
      return {
        ...state,
        marks: action.payload,
      };
    case ORDER_PRODUCTS_BY_NAME:
      const orderedProductsByName =
        action.payload === "ascendente"
          ? state.products.sort((a, b) => {
              return a.name - b.name;
            })
          : state.products.sort((a, b) => {
              return b.name - a.name;
            });
      return {
        ...state,
        products: orderedProductsByName,
      };
    case ORDER_PRODUCTS_BY_SCORE:
      const orderedProductsByScore =
        action.payload === "ascendente"
          ? state.products.sort((a, b) => {
              return a.score - b.score;
            })
          : state.products.sort((a, b) => {
              return b.score - a.score;
            });
      return {
        ...state,
        products: orderedProductsByScore,
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        productsStatus: !action.payload.length
          ? "No se encontraron productos con este filtro"
          : "loading",
        products: action.payload,
      };
    case CREATE_USER:
      return {
        ...state,
      };
    case CREATE_PUBLICATION:
      return {
        ...state,
      };
    case LOGIN_USER:
      return{
        ...state,
        session:action.payload,
      }
    default:
      return state;
  }
};
export default rootReducer;
