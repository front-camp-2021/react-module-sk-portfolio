import {FilterList} from "../components/FilterList";
import {useDispatch, useSelector} from "react-redux";
import {selectFilters} from "../features/filters/selectors";
import {CLEAR_FORM} from "../features/filters/actions";
import {DoubleSlider} from "../components/DoubleSlider/DoubleSlider";

export function Sidebar(){
    const filters = useSelector(selectFilters)
    const dispatch = useDispatch()

    return(
        <aside className="sidebar products-list__sidebar"  data-element="body">
            <div className="sidebar__head">
                <h3>
                    Filters
                </h3>
                <button className="btn btn--only-img btn--white-bg">
                    <img src={""} alt={"close"} />
                </button>
            </div>
            <div className="sidebar__range-sliders" data-element="slidersWrapper">
                <DoubleSlider />
                <DoubleSlider />
            </div>
            <form className="sidebar__form"  data-element="form">
                <FilterList filters={filters} />
            </form>
            <button className="btn btn--large-font btn--violet btn--full-width" data-element="button" onClick={() => dispatch({type: CLEAR_FORM})}>
                CLEAR ALL FILTERS
            </button>
        </aside>
    )
}