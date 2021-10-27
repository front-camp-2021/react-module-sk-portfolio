export const selectProducts = (productsType) => (state) => {
    switch (productsType) {
        case "wishlist":
            return state.products.filter(product => product.isWished)
        case "cart-products":
            return state.products.filter(product => product.toCart)
        default:
            return state.products
    }
}

