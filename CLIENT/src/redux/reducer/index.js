import {
  GET_PRODUCTS,
  GET_PRODUCT_DETAIL,
  SEARCH_PRODUCT,
  GET_SIZES,
  ORDER_PRODUCTS_BY_NAME,
  ORDER_PRODUCTS_BY_SCORE,
  FILTER_PRODUCTS,
  CREATE_USER,
  CREATE_PUBLICATION,
  EMPTY_DETAIL,
  GET_FAVORITES,
  ADD_TO_FAVORITES,
  DELETE_FAVORITE,
  LOGIN_USER,
  LOGIN,
  LOGOUT,
  LOGOUT_USER,
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
  GET_REVIEWS_PRODUCT_DETAIL,
  FLUSH_ERROR,
  GET_SELLS_HISTORY
} from "../action-types";

const initialState = {
  products: [],
  productsAux: [],
  productDetail: [],
  productReviews: [],
  sizes: [],
  productsStatus: "loading",
  favorites: [],
  login: false,
  cart: [],
  user: {},
  sellsHistory: []
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
    case GET_REVIEWS_PRODUCT_DETAIL:
      return {
        ...state,
        productReviews: action.payload,
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
    case ORDER_PRODUCTS_BY_NAME:
      return {
        ...state,
        products: state.products.sort((a, b) => {
          if (action.payload === "A-Z") {
            if (a.name < b.name) return -1;
            if (b.name < a.name) return 1;
            return 0;
          } else {
            if (b.name < a.name) return -1;
            if (a.name < b.name) return 1;
            return 0;
          }
        }),
      };
    /* case ORDER_PRODUCTS_BY_SCORE:
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
      }; */
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
    // case GET_FAVORITES:
    //   return {
    //     ...state,
    //     favorites: action.payload,
    //   };
    case ADD_TO_FAVORITES:
      let newFavorite = state.products.find((p) => p.id === action.payload);
      let productInFav = state.favorites.find((f) => f.id === newFavorite.id);
      return !productInFav
        ? {
            ...state,
            favorites: [...state.favorites, newFavorite],
          }
        : state;
    case DELETE_FAVORITE:
      let delFav = state.favorites.filter((f) => f.id !== action.payload);
      return {
        ...state,
        favorites: delFav,
      };
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        login: action.payload,
      };
    case ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case CLEAR_CART:
      return {
        ...state,
      };
    case FLUSH_ERROR:
      return {
        ...state,
        loginError: action.payload,
      };
    case GET_SELLS_HISTORY:
      return {
        ...state,
        sellsHistory: action.payload
      }
    default:
      return state;
  }
};
export default rootReducer;