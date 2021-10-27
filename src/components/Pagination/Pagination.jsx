import {PaginationLink} from "./PaginationLink";
import {useDispatch, useSelector} from "react-redux";
import {
    NEXT_PRODUCT_PAGE,
    PREV_PRODUCT_PAGE,
    paginationAction
} from "../../features/pages/actions";
import {selectCurrentPage} from "../../features/pages/selectors";
import {setPageNumbers} from "../../helpers/setPagesNumbers";
import arrow from 'img/icons/arrow-left.svg'

export function Pagination({numberOfPages}) {
    const dispatch = useDispatch()
    let currentPage = useSelector(selectCurrentPage)

    const goPrev = () => dispatch(paginationAction(PREV_PRODUCT_PAGE))
    const goNext = () => dispatch(paginationAction(NEXT_PRODUCT_PAGE))


    return (
        <nav className="products-list__pagination pagination" data-element="wrapper">
            <button className="pagination__btn pagination__btn--left" data-element="prev"
                    onClick={goPrev}
                    disabled={currentPage === 1}
            >
                <img src={arrow} alt={"previous page"}/>
            </button>
            <ul className="pagination__list" data-element="list">
                {
                    setPageNumbers(numberOfPages).map(number => <PaginationLink key={number} id={number} currentId={currentPage}/>)
                }
            </ul>
            <button className="pagination__btn pagination__btn--right" data-element="next" onClick={goNext}
                    disabled={currentPage === numberOfPages}>
                <img src={arrow} alt={"next page"}/>
            </button>
        </nav>
    )
}