export function getRequestUrl(url, filtersValues){
    const categoriesValues = filtersValues.categories
    const brandsValues = filtersValues.brands
    const categories = categoriesValues.map(category => `category=${category.name.toLowerCase().replace(' ','_')}`)
    const brands = brandsValues.map(brand => `brand=${brand.name.toLowerCase().replace(' ','_')}`)
    const categoriesString = categories.join('&')
    const brandsString = brands.join('&')

    return `${url}?${categoriesString}&${brandsString}`;
}