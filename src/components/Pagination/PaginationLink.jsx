import { useDispatch } from "react-redux";
import {
  paginationAction,
  SELECT_PRODUCT_PAGE,
} from "../../features/pages/actions";

export function PaginationLink({ id, currentId }) {
  const dispatch = useDispatch();
  const defaultClass = "pagination__item";
  const currentClass = id === currentId ? "pagination__link--current" : "";
  return (
    <li className={`${defaultClass} ${currentClass}`}>
      <button
        className="pagination__link"
        onClick={() => dispatch(paginationAction(SELECT_PRODUCT_PAGE, id))}
      />
    </li>
  );
}
