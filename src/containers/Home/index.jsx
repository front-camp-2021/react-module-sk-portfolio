import {Sidebar} from "components/Sidebar";
import {Search} from "components/Search/Search";
import heart from "img/icons/white-heart.svg";
import CardList from "components/CardList/CardList";
import {useDispatch, useSelector} from "react-redux";
import {selectProducts} from "features/products";
import {selectActiveFilters} from "features/filters/selectors";
import {setFilteredProducts} from "helpers/setFilteredProducts";
import {useHistory} from "react-router-dom"
import {Pagination} from "../../components/Pagination/Pagination";
import {numberOfPages} from "../../helpers/numberOfPages";
import {NUMBER_OF_PRODUCTS_ONE_PAGE} from "../../constants";
import {GO_TO_START, paginationAction} from "../../features/pages/actions";
import basket from 'img/icons/bag.svg'

export function Home() {
    const products = useSelector(selectProducts('all'))
    const filters = useSelector(selectActiveFilters)
    const filteredProducts = setFilteredProducts(products, filters)
    const history = useHistory()
    const dispatch = useDispatch()

    function goToWishlist() {
        history.push("/wishlist")
        dispatch(paginationAction(GO_TO_START))
    }
    function goToCartList() {
        history.push("/cart-products")
        dispatch(paginationAction(GO_TO_START))
    }
    const isNeededPagination = numberOfPages(filteredProducts, NUMBER_OF_PRODUCTS_ONE_PAGE) > 1
    return (
        <section className={"products-list"}>
        <div className="container ">
            <div className="products-list__inner" data-element="mainWrapper">
                <Sidebar/>
                <div className="products products-list__main">
                    <Search/>
                    <div className="products__search-res">
                        <p>
                            {filteredProducts.length} results found
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
                    <CardList products={products} filteredProducts={filteredProducts}/>
                    { isNeededPagination ? <Pagination numberOfPages={numberOfPages(filteredProducts, NUMBER_OF_PRODUCTS_ONE_PAGE)} /> : null }

                </div>
            </div>
        </div>
        </section>
    )
}