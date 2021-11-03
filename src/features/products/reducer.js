import {
    GET_PRODUCTS_SUCCESS,
    GET_FILTERED_PRODUCTS,
    CHANGE_TO_CART,
    CLEAR_CART,
    CLEAR_WISHLIST,
    SEARCH_VALUE_CHANGE,
    CHANGE_WISHLIST_STATUS
} from './actions.js'
import {PRODUCTS_INITIAL_STATE} from "fixtures"

export function products(state = PRODUCTS_INITIAL_STATE, action) {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                productsAll: action.payload
            }
        case GET_FILTERED_PRODUCTS:
            return {
                ...state,
                productsFiltered: action.payload
            }
        case CHANGE_WISHLIST_STATUS:
            return {
                ...state,
                productsFiltered: state.productsFiltered.map((product) => {
                    return product.id === action.payload ? {...product, isWished: !product.isWished} : product
                })
            }
        case CHANGE_TO_CART:
            return {
                ...state,
                productsFiltered: state.productsFiltered.map((product) =>
                    product.id === action.payload ? {...product, isCart: !product.isCart} : product
                )
            }
        case CLEAR_WISHLIST:
            return {
                ...state,
                productsFiltered: state.productsAll.map(product => {
                    return {
                        ...product,
                        isWished: false
                    }
                })
            }
        case CLEAR_CART:
            return {
                ...state,
                productsFiltered: state.productsAll.map(product => {
                    return {
                        ...product,
                        isCart: false
                    }
                })
            }
        case SEARCH_VALUE_CHANGE:
            return {
                ...state,
                productsSearch: action.payload
            }
        default:
            return state
    }
}

