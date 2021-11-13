export const selectProducts = (productsType) => (state) => {
  switch (productsType) {
    // case "wishlist":
    //   return state.products.products.filter(({ isWished }) => isWished);
    case "cart":
      return state.products.cartProducts;
    case "search":
      return state.products.productsSearch;
    default:
      return state.products.products;
  }
};
