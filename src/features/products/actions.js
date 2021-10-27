const CHANGE_WISHLIST_STATUS = 'CHANGE_WISHLIST_STATUS';
const CHANGE_TO_CART = 'CHANGE_TO_CART';
const CLEAR_WISHLIST = 'CLEAR_WISHLIST';
const CLEAR_CART = 'CLEAR_CART';

function productCardAction(type, payload=[]) {
    return { type: type, payload };
}


export {
    CHANGE_WISHLIST_STATUS, CHANGE_TO_CART, CLEAR_WISHLIST, CLEAR_CART,
    productCardAction
};