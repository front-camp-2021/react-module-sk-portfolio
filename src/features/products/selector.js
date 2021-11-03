export const selectProducts = (productsType) => (state) => {
    switch (productsType) {
        case "wishlist":
            return state.products.productsFiltered.filter(product => product.isWished)
        case "cart":
            return state.products.productsFiltered.filter(product => product.isCart)
        case "filtered":
            return state.products.productsFiltered
        case "search":
            return state.products.productsSearch
        default:
            return state.products.productsAll
    }
}

