export function getActiveFiltersNames(filters){
    const names = {}
    Object.entries(filters).map(entry => {
        names[entry[0]] = entry[1].map(filter => filter.name.toLowerCase().replace(' ','_'))
    })
    return names
}

