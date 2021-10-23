export const setProductsPage = (products, pageIndex = 1, numberForOnePage) =>
    products.slice((pageIndex) * numberForOnePage, (pageIndex+1) * numberForOnePage)