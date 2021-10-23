export {NEXT_PRODUCT_PAGE, PREV_PRODUCT_PAGE, SELECT_PRODUCT_PAGE, selectProductPage, nextProductPage, prevProductPage}

const NEXT_PRODUCT_PAGE = "NEXT_PRODUCTS_PAGE"
const PREV_PRODUCT_PAGE = "PREV_PRODUCT_PAGE"
const SELECT_PRODUCT_PAGE = "SELECT_PRODUCT_PAGE"

function selectProductPage(payload){
    return {
        type : SELECT_PRODUCT_PAGE,
        payload
    }
}
function nextProductPage(payload){

    return {
        type : NEXT_PRODUCT_PAGE,
        payload
    }
}
function prevProductPage(payload){
    return {
        type : PREV_PRODUCT_PAGE,
        payload
    }
}