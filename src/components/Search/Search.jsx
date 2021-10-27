import search from "img/icons/search.svg"

export function Search(){
    return(
        <form className="products__search search">
            <input type="text" placeholder="Search" data-element="input"/>
                <button data-element="submit">
                    <img src={search} alt="search"/>
                </button>
        </form>
    )
}