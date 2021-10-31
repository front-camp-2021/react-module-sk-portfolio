import {addWishCartStatus} from "../../helpers/addWishCartStatus";
import axios from "axios";
import {URL_PRODUCTS} from "fixtures";

const CHANGE_WISHLIST_STATUS = 'CHANGE_WISHLIST_STATUS';
const CHANGE_TO_CART = 'CHANGE_TO_CART';
const CLEAR_WISHLIST = 'CLEAR_WISHLIST';
const CLEAR_CART = 'CLEAR_CART';
const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
const GET_FILTERED_PRODUCTS = 'GET_FILTERED_PRODUCTS'


const productCardAction = (type, payload) => {
    return {
        type: type,
        payload: payload
    }
}

const getFilteredProducts = (URL_PRODUCTS) => {
    return (dispatch) => {
        axios.get(URL_PRODUCTS)
            .then(res => addWishCartStatus(res.data))
            .then(res => dispatch(productCardAction(GET_FILTERED_PRODUCTS, res)))

    }
}

const getProducts = () => {

    return (dispatch) => {
        axios.get(URL_PRODUCTS.href)
            .then(res => addWishCartStatus(res.data))
            .then(res => dispatch(productCardAction(GET_PRODUCTS_SUCCESS, res)))
    }
}


export {
    CHANGE_WISHLIST_STATUS,
    CHANGE_TO_CART,
    CLEAR_WISHLIST,
    CLEAR_CART,
    GET_PRODUCTS_SUCCESS,
    GET_FILTERED_PRODUCTS,
    productCardAction,
    getFilteredProducts,
    getProducts
};