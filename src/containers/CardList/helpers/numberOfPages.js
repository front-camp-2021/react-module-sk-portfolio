export function numberOfPages(products, numberOfProducts) {
    return Math.ceil(products.length / numberOfProducts)
}