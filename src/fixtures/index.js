const FILTERS_INITIAL_STATE = {
    categories: [],
    brands: [],
}
const INITIAL_STATE_PAGINATION = {
    currentPage: 1
}

const PRODUCTS_INITIAL_STATE = {
    productsList: []
}

const SLIDERS_INITIAL_STATE = [
    {
        type: 'price',
        min: 0,
        max: 50000,
    },
]

const URL_PRODUCTS = new URL('http://localhost:3001/products')
const URL_CATEGORIES = new URL('http://localhost:3001/categories')
const URL_BRANDS = new URL('http://localhost:3001/brands')

export {FILTERS_INITIAL_STATE, INITIAL_STATE_PAGINATION, PRODUCTS_INITIAL_STATE, SLIDERS_INITIAL_STATE, URL_PRODUCTS, URL_CATEGORIES, URL_BRANDS}