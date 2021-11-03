import {Sidebar} from "components/Sidebar";
import {Search} from "components/Search/Search";
import heart from "img/icons/white-heart.svg";
import CardList from "components/CardList/CardList";
import {useDispatch, useSelector} from "react-redux";
import {selectActiveFilters} from "features/filters/selectors";
import {useHistory} from "react-router-dom"
import {Pagination} from "../../components/Pagination/Pagination";
import {numberOfPages} from "../../helpers/numberOfPages";
import {NUMBER_OF_PRODUCTS_ONE_PAGE} from "../../constants";
import {GO_TO_START, paginationAction} from "../../features/pages/actions";
import { useEffect} from "react";
import {getRequestUrl} from "../../helpers/setRequestUrl";
import {getProducts, getFilteredProducts} from 'features/products/actions.js'
import {getProductsFromRange} from "../../helpers/getProductsFromRange";
import basket from 'img/icons/bag.svg'
import {selectProducts} from "../../features/products/selector";
import {setFilteredProducts} from "../../helpers/setFilteredProducts";
import {selectSliders} from "../../features/sliders/selectors";

export function Home() {
    const history = useHistory()
    const dispatch = useDispatch()
    const productsFiltered = useSelector(selectProducts("filtered"))
    const productsSearch = useSelector(selectProducts("search"))
    const slidersState = useSelector(selectSliders)
    const sliders = Object.values(slidersState)
    const productsList = setFilteredProducts(productsFiltered, productsSearch)
    const products = getProductsFromRange(productsList, sliders)
    const filters = useSelector(selectActiveFilters)

    const url = getRequestUrl('http://localhost:3001/products', filters)
    useEffect(() => {
        dispatch(getFilteredProducts(url))
    }, [url])
    useEffect(() => {
        dispatch(getProducts())
    }, [])

    function goToWishlist() {
        history.push("/wishlist")
        dispatch(paginationAction(GO_TO_START))
    }

    function goToCartList() {
        history.push("/cart")
        dispatch(paginationAction(GO_TO_START))
    }

    const isNeededPagination = numberOfPages(products, NUMBER_OF_PRODUCTS_ONE_PAGE) > 1
    return (
        <section className={"product-list"}>
            <div className="container ">
                <div className="products-list__inner" data-element="mainWrapper">
                    <Sidebar/>
                    <div className="products products-list__main">
                        <Search/>
                        <div className="products__search-res">
                            <p>
                                {products.length} results found
                            </p>
                            <div className="products__search-btns">
                                <button className="btn btn--only-img btn--violet">
                                    <img src={basket} alt={"basket"} onClick={goToCartList}/>
                                </button>
                                <button className="btn btn--only-img btn--violet">
                                    <img src={heart} alt={"heart"} onClick={goToWishlist}/>
                                </button>
                            </div>
                        </div>
                        <CardList products={products}/>
                        {isNeededPagination ? <Pagination
                            numberOfPages={numberOfPages(products, NUMBER_OF_PRODUCTS_ONE_PAGE)}/> : null}

                    </div>
                </div>
            </div>
        </section>
    )
}