import {
    GET_PRODUCTS_SUCCESS,
    CHANGE_WISHLIST_STATUS,
    GET_FILTERED_PRODUCTS,
    CHANGE_TO_CART,
    CLEAR_WISHLIST,
    CLEAR_CART
} from './actions.js'
import {PRODUCTS_INITIAL_STATE} from "fixtures"

export function reducer(state = PRODUCTS_INITIAL_STATE, action) {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                productsList: action.payload
            }
        case GET_FILTERED_PRODUCTS:
            return {
                ...state,
                productsList: action.payload
            }
        case CHANGE_WISHLIST_STATUS:
            return {
                ...state,
                productsList: state.productsList.map((product) =>
                    product.id === action.payload ? {...product, isWished: !product.isWished} : product
                )
            }
        case CHANGE_TO_CART:
            return {
                ...state,
                productsList: state.productsList.map((product) =>
                    product.id === action.payload ? {...product, isCart: !product.isCart} : product
                )
            }
        case CLEAR_WISHLIST:
            return {
                ...state,
                productsList: state.productsList.map(product => {
                    return {
                        ...product,
                        isWished: false
                    }
                })
            }
        case CLEAR_CART:
            return {
                ...state,
                productsList: state.productsList.map(product => {
                    return {
                        ...product,
                        isCart: false
                    }
                })
            }
        default:
            return state
    }
}

