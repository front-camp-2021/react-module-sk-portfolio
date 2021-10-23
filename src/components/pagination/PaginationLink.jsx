import {useDispatch} from "react-redux";
import {selectProductPage} from "../../features/pages/actions";

export function PaginationLink({id, currentId}) {
    const dispatch = useDispatch()
    const defaultClass = "pagination__item"
    const currentClass = id === currentId ? "pagination__link--current" : ""
    return (
        <li className={`${defaultClass} ${currentClass}`}>
            <button className="pagination__link" onClick={() => dispatch(selectProductPage(id))}/>
        </li>
    )
}