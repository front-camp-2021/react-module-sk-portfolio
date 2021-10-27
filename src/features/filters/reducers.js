import {CLEAR_FORM, CHANGE_CHECKED_FIELD} from "./actions";
import {FILTERS_INITIAL_STATE} from "fixtures/ fixtures"


export function filters(state = getFilters(FILTERS_INITIAL_STATE), action) {
    switch (action.type) {
        case CHANGE_CHECKED_FIELD :
            return state.map(filter =>{
                return filter.name === action.payload ? {...filter, isChecked: !filter.isChecked} : filter
            })
        case CLEAR_FORM :
            return state.map(filter => {
                return {
                    ...filter,
                    isChecked: false
                }
            })
        default:
            return state
    }
}

const getFilters = (filters) => {
    return filters.map(filter => {
        return {
            name: filter,
            isChecked: false
        }
    })
}