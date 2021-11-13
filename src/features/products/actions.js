import axios from "axios";
import { URL_PRODUCTS } from "fixtures";

export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";
export const ADD_TO_CART = "ADD_TO_CART";
export const CLEAR_WISHLIST = "CLEAR_WISHLIST";
export const CLEAR_CART = "CLEAR_CART";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const SEARCH_VALUE_CHANGE = "SEARCH_VALUE_CHANGE";
export const REMOVE_FROM_CART = "REMOVE_FORM_CART";

export const productCardAction = (type, payload) => {
  return {
    type: type,
    payload,
  };
};

export function addToWishlist(id) {
  const prevState = JSON.parse(localStorage.getItem("wishlist")) || [];
  localStorage.setItem("wishlist", JSON.stringify([...prevState, id]));
  return (dispatch) => {
    dispatch(productCardAction(ADD_TO_WISHLIST, id));
  };
}

export function removeFromWishlist(id) {
  const wishlist = JSON.parse(localStorage.getItem("wishlist"));
  const newWishlist = wishlist.filter((item) => item !== id);
  localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  return (dispatch) => {
    dispatch(productCardAction(REMOVE_FROM_WISHLIST, id));
  };
}

export function addToCart(product) {
  const prevState = JSON.parse(localStorage.getItem("cart")) || [];
  localStorage.setItem("cart", JSON.stringify([...prevState, product]));

  return (dispatch) => {
    dispatch(productCardAction(ADD_TO_CART, product));
  };
}

export function removeFromCart(uniqId) {
  const newState = JSON.parse(localStorage.getItem("cart")).filter(
    (product) => product.uniqId !== uniqId
  );
  localStorage.setItem("cart", JSON.stringify(newState));

  return (dispatch) => {
    dispatch(productCardAction(REMOVE_FROM_CART, uniqId));
  };
}

export function getSearchProducts(value) {
  return (dispatch) => {
    URL_PRODUCTS.searchParams.set("q", value);
    axios
      .get(URL_PRODUCTS.href)
      .then((res) => res.data)
      .then((res) => dispatch(productCardAction(SEARCH_VALUE_CHANGE, res)));
  };
}

export const getProducts = (URL_PRODUCTS) => {
  const wishlistIds = localStorage.getItem("wishlist");
  return (dispatch) => {
    axios
      .get(URL_PRODUCTS)
      .then((res) =>
        res.data.map((product) => {
          const isWished = wishlistIds?.includes(product.id);
          return { ...product, isWished };
        })
      )
      .then((res) => dispatch(productCardAction(GET_PRODUCTS, res)));
  };
};
