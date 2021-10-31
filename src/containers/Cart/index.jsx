import CardList from "../../components/CardList/CardList";
import {useDispatch, useSelector} from "react-redux";
import {selectProducts} from "../../features/products/selector";
import { CLEAR_CART, productCardAction} from "../../features/products/actions";
import {numberOfPages} from "../../helpers/numberOfPages";
import {NUMBER_OF_PRODUCTS_ONE_PAGE} from "../../constants";
import {Pagination} from "../../components/Pagination/Pagination";
import {useHistory} from "react-router-dom";

const START_PAGE = 1

export function Cart() {
    const products = useSelector(selectProducts("cart"))
    let history = useHistory()
    const dispatch = useDispatch()

    const onClearCartList = () => {
        dispatch(productCardAction(CLEAR_CART))
        history.push('/')
    }

    const isNeededPagination = numberOfPages(products, NUMBER_OF_PRODUCTS_ONE_PAGE) > 1

    return (
        <section className={"reducer-list"}>
            <div className="container ">
                <button className={"btn btn--violet btn--border-radius btn--large clear-wishlist"} onClick={onClearCartList}>Clear all items</button>
                <div className="products products-list__main">
                    <CardList products={products} startPage={START_PAGE}/>
                    { isNeededPagination ? <Pagination numberOfPages={numberOfPages(products, NUMBER_OF_PRODUCTS_ONE_PAGE)} /> : null }
                </div>
            </div>
        </section>
    )
}