export function addWishCartStatus(products){
    return products.map(product => {
        return {
            ...product,
            isWished: false,
            isCart: false
        }
    })
}