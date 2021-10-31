import {CLEAR_FORM, CHANGE_CHECKED_FIELD, GET_FILTERS_SUCCESS} from "./actions";
import {FILTERS_INITIAL_STATE} from "fixtures"


export function filters(state = FILTERS_INITIAL_STATE, action) {
    switch (action.type) {
        case GET_FILTERS_SUCCESS:
            return {
                ...state,
                categories: action.payload.categories,
                brands: action.payload.brands
            }
        case CHANGE_CHECKED_FIELD :
            return {
                ...state,
                categories: state.categories.map(filter => {
                    return filter.name === action.payload ? {...filter, isChecked: !filter.isChecked} : filter
                }),
                brands: state.brands.map(filter => {
                    return filter.name === action.payload ? {...filter, isChecked: !filter.isChecked} : filter
                }),
            }
        case CLEAR_FORM :
            return {
                ...state,
                categories: state.categories.map(filter => {
                    return {
                        ...filter,
                        isChecked: false
                    }
                }),
                brands: state.brands.map(filter => {
                    return {
                        ...filter,
                        isChecked: false
                    }
                })
            }
        default:
            return state
    }
}

