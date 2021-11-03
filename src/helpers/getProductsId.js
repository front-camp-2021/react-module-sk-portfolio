export function getProductsId(products){
    return products.map(product => `${product.id}`)
}