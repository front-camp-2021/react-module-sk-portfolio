export const setProductsPage = (products, pageIndex = 1, numberForOnePage) =>
    products.slice((pageIndex - 1) * numberForOnePage, pageIndex * numberForOnePage)