export const setFilteredProducts = (products = [], filters = []) => {
    if (filters.length === 0) {
        return products
    } else {
        return products.filter(product =>
            filters.some(filter => product.category === filter.name.toLowerCase() || product.brand === filter.name.toLowerCase() ? product : null)
        )
    }
}