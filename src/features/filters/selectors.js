export const selectFilters = (state) => {
    return state.filters
}
export const selectActiveFilters = (state) => {
    return state.filters.filter(filter => filter.isChecked)
}

