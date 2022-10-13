import { GET_PRODUCTS,
         GET_PRODUCT_DETAIL,
         GET_SIZES,
         GET_MARKS,
         ORDER_PRODUCTS_BY_NAME,
         ORDER_PRODUCTS_BY_SCORE,
         FILTER_PRODUCTS_BY_SIZE,
         FILTER_PRODUCTS_BY_MARK,
         FILTER_PRODUCTS_BY_DEMOGRAPHY,
         FILTER_PRODUCTS_BY_LOCATION,
         FILTER_PRODUCTS_BY_TYPE,
         FILTER_PRODUCTS_BY_PRICE } from "../action-types"

const initialState = {
    products: [],
    productDetail: {},
    sizes: [],
    marks: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case GET_PRODUCT_DETAIL:
            return {
                ...state,
                productDetail: action.payload
            }
        case GET_SIZES:
            return {
                ...state,
                sizes: action.payload
            }
        case GET_MARKS:
            return {
                ...state,
                marks: action.payload
            }
        case ORDER_PRODUCTS_BY_NAME:
            const orderedProductsByName = action.payload === "ascendente" ? 
            state.products.sort((a, b) => {
                return a.name - b.name
            }) :
            state.products.sort((a, b) => {
                return b.name - a.name
            })
            return {
                ...state,
                products: orderedProductsByName
            }
        case ORDER_PRODUCTS_BY_SCORE:
            const orderedProductsByScore = action.payload === "ascendente" ? 
            state.products.sort((a, b) => {
                return a.score - b.score
            }) :
            state.products.sort((a, b) => {
                return b.score - a.score
            })
            return {
                ...state,
                products: orderedProductsByScore
            }
        case FILTER_PRODUCTS_BY_SIZE:
            return {
                ...state,
                products: action.payload
            }
        case FILTER_PRODUCTS_BY_MARK:
            return {
                ...state,
                products: action.payload
            }
        case FILTER_PRODUCTS_BY_DEMOGRAPHY:
            return {
                ...state,
                products: action.payload
            }
        case FILTER_PRODUCTS_BY_LOCATION:
            return {
                ...state,
                products: action.payload
            }
        case FILTER_PRODUCTS_BY_TYPE:
            return {
                ...state,
                products: action.payload
            }
        case FILTER_PRODUCTS_BY_PRICE:
            return {
                ...state,
                products: action.payload
            }
        default: return state
    }
}

export default rootReducer