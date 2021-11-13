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
import { useEffect } from "react";
import {getProducts } from 'features/products/actions.js'


const START_PAGE = 1

export function WishList() {
    const products = useSelector(selectProducts("all"))
    const wishList = products.filter(({isWished}) => isWished)

    const history = useHistory()
    const dispatch = useDispatch()
    const onClearWishList = () => {
        localStorage.removeItem('wishlist')
        dispatch(productCardAction(CLEAR_WISHLIST))
        history.push('/')
    }

    useEffect(() => {
        dispatch(getProducts('http://localhost:3001/products'))
    }, []);

    const isNeededPagination = numberOfPages(wishList, NUMBER_OF_PRODUCTS_ONE_PAGE) > 1

    return (
        <>
            <Header />
            <section className={"products-list"}>
                <div className="container ">
                <BreadCrumps />
                    <button className="btn btn--large btn--border-radius btn--violet  clear-wishlist" onClick={() => history.push('/cart') }>go to cart</button>
                    <button className="btn btn--large btn--border-radius  clear-wishlist" onClick={() => history.push('/') }>back to home</button>
                    <button className={"btn btn--violet btn--border-radius btn--large clear-wishlist"} onClick={onClearWishList}>Clear all items</button>
                    <div className="products products-list__main">
                        <CardList products={wishList} startPage={START_PAGE} />
                        {isNeededPagination ? <Pagination numberOfPages={numberOfPages(wishList, NUMBER_OF_PRODUCTS_ONE_PAGE)} /> : null}
                    </div>
                </div>
            </section>
        </>
    )
}