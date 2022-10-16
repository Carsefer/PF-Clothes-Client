import { GET_PRODUCTS,
         GET_PRODUCT_DETAIL,
         SEARCH_PRODUCT,
         GET_SIZES,
         GET_MARKS,
         ORDER_PRODUCTS_BY_NAME,
         ORDER_PRODUCTS_BY_SCORE,
         FILTER_PRODUCTS,
         CREATE_USER, 
         CREATE_PUBLICATION} from "../action-types"

const initialState = {
    products: [],
    productsAux: [],
    productDetail: {},
    sizes: [],
    marks: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                productsAux: action.payload
            }
        case GET_PRODUCT_DETAIL:
            return {
                ...state,
                productDetail: action.payload
            }
        case SEARCH_PRODUCT:
            return {
                ...state,
                products: action.payload
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
        case FILTER_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case CREATE_USER:
            return{
                ...state,
            }
        case CREATE_PUBLICATION:
             return{
                    ...state,
                }
        default: return state
    }
}

export default rootReducer