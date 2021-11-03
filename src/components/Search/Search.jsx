import search from "img/icons/search.svg"
import {useDispatch} from "react-redux";
import {useState} from "react";
import {debounce} from "helpers/debounce";
import {getSearchProducts} from "../../features/products/actions";

export function Search() {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const onSearch = (e) => {
        e.preventDefault()
        dispatch(getSearchProducts(value))
    }
    return (
        <form className="products__search search" onSubmit={e => onSearch(e)}>
            <input type="text"
                   placeholder="Search"
                   data-element="input"
                   onChange={debounce(e => setValue(e.target.value))}/>
            <button data-element="submit">
                <img src={search} alt="search"/>
            </button>
        </form>
    )
}