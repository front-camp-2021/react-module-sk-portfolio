import {CLEAR_FORM, CHANGE_CHECKED_FIELD} from "./actions";


export function filters(state = getFilters(filtersInitialState), action) {
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

export const filtersInitialState = [
    "Asus",
    "Acer",
    "Apple",
    "Dell",
    "Dynamode",
    "Gigabyte",
    "Kingston",
    "Lenovo",
    "Logitech",
    "MSI",
    "BenQ",
    "A4Tech"
]

const getFilters = (filters) => {
    return filters.map(filter => {
        return {
            name: filter,
            isChecked: false
        }
    })
}
