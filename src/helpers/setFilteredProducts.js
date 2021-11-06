export const setFilteredProducts = (productsFiltered = [], productSearch = [], searchValue = "") => {
    if (productsFiltered.length === 0 || searchValue.length !== 0) {
        return productSearch
    } else if (productSearch.length === 0) {
        return productsFiltered
    } else {;
        return productsFiltered.filter(product =>
            productSearch.some(productSearch => productSearch.id === product.id)
        )
    }
}