export const selectProducts = (productsType) => (state) => {
    switch (productsType) {
        case "wishlist":
            return state.products.productsList.filter(product => product.isWished)
        case "cart":
            return state.products.productsList.filter(product => product.isCart)
        default:
            return state.products.productsList
    }
}

