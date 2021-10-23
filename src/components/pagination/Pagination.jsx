import {PaginationLink} from "./PaginationLink";
import {useDispatch, useSelector} from "react-redux";
import {nextProductPage, prevProductPage} from "../../features/pages/actions";
import {selectCurrentPage} from "../../features/pages/selectors";
import {setPageNumbers} from "./helpers/setPagesNumbers";
import arrow from 'img/icons/arrow-left.svg'

export function Pagination(props) {
    const dispatch = useDispatch()
    let indexPage = useSelector(selectCurrentPage)

    const numberOfPages = props.numderOfPages - 1
    const correctPrevId = (id, minPage = 0) => {
        dispatch(prevProductPage(id <= minPage ? minPage : id - 1))
    }
    const correctNextId = (id, maxPage) => {
        dispatch(nextProductPage(id >= maxPage ? maxPage : id + 1))
    }

    return (
        <nav className="products-list__pagination pagination" data-element="wrapper">
            <button className="pagination__btn pagination__btn--left" data-element="prev"
                    onClick={() => correctPrevId(indexPage.id)}>
                <img src={arrow} alt={"previous page"}/>
            </button>
            <ul className="pagination__list" data-element="list">
                {
                    setPageNumbers(numberOfPages).map(number => <PaginationLink key={number} id={number} currentId={indexPage.id}/>)
                }
            </ul>
            <button className="pagination__btn pagination__btn--right" data-element="next" onClick={() => correctNextId(indexPage.id, numberOfPages)}>
                <img src={arrow} alt={"next page"}/>
            </button>
        </nav>
    )
}