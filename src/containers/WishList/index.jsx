import CardList from "components/CardList";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "features/products/selector";
import { CLEAR_WISHLIST, productCardAction } from "features/products/actions";
import { numberOfPages } from "helpers/numberOfPages";
import { NUMBER_OF_PRODUCTS_ONE_PAGE } from "../../constants";
import { Pagination } from "components/Pagination";
import { useHistory } from "react-router-dom"
import { Header } from "components/Header";
import { BreadCrumps } from "components/BreadCrumps";


const START_PAGE = 1

export function WishList() {
    const products = useSelector(selectProducts("wishlist"))
    const history = useHistory()
    const dispatch = useDispatch()
    const onClearWishList = () => {
        dispatch(productCardAction(CLEAR_WISHLIST))
        history.push('/')
    }

    const isNeededPagination = numberOfPages(products, NUMBER_OF_PRODUCTS_ONE_PAGE) > 1

    return (
        <>
            <Header />
            <section className={"products-list"}>
                <div className="container ">
                <BreadCrumps />
                    <button onClick={() => history.push('/')}>back to home</button>
                    <button className={"btn btn--violet btn--border-radius btn--large clear-wishlist"} onClick={onClearWishList}>Clear all items</button>
                    <div className="products products-list__main">
                        <CardList products={products} startPage={START_PAGE} />
                        {isNeededPagination ? <Pagination numberOfPages={numberOfPages(products, NUMBER_OF_PRODUCTS_ONE_PAGE)} /> : null}
                    </div>
                </div>
            </section>
        </>
    )
}