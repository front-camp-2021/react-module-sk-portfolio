import {CHANGE_WISHLIST_STATUS, CHANGE_TO_CART, CLEAR_WISHLIST, CLEAR_CART} from './actions.js'
import {PRODUCTS_INITIAL_STATE} from "fixtures/ fixtures"

export function products(state = PRODUCTS_INITIAL_STATE, action) {
    switch (action.type) {
        case CHANGE_WISHLIST_STATUS:
            return state.map((product) =>
                product.id === action.payload ? {...product, isWished: !product.isWished} : product
            )
        case CHANGE_TO_CART:
            return state.map((product) =>
                product.id === action.payload ? {...product, toCart: !product.toCart} : product
            )
        case CLEAR_WISHLIST:
            return state.map(product => {
                return {
                    ...product,
                    isWished: false
                }
            })
        case CLEAR_CART:
            return state.map(product => {
                return {
                    ...product,
                    toCart: false
                }
            })
        default:
            return state
    }
}

