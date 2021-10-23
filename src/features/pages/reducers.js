import {NEXT_PRODUCT_PAGE, PREV_PRODUCT_PAGE, SELECT_PRODUCT_PAGE} from "./actions";

export function pages(state = INITIAL_PAGE_INDEX , action){
    switch (action.type){
        case SELECT_PRODUCT_PAGE:
            return {...state, id:action.payload}
        case NEXT_PRODUCT_PAGE:
            return {...state, id:action.payload}
        case PREV_PRODUCT_PAGE:
            return {...state, id:action.payload}
        default:
                return INITIAL_PAGE_INDEX
    }
}

export const INITIAL_PAGE_INDEX = {
    id: 0
}