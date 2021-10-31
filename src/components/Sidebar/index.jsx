import {FilterList} from "./FilterList";
import {useDispatch, useSelector} from "react-redux";
import {selectFilters} from "../../features/filters/selectors";
import {CLEAR_FORM, getFilters} from "../../features/filters/actions";
import {DoubleSlider} from "../DoubleSlider/DoubleSlider";
import arrows from "img/icons/arrows-left.svg"
import {useEffect} from "react";
import {selectSliders} from "../../features/sliders/selectors";

export function Sidebar(){
    const filtersState = useSelector(selectFilters)
    const filterListsProps = Object.entries(filtersState)
    const sliders = useSelector(selectSliders)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFilters())
    }, [])
    return(
        <aside className="sidebar products-list__sidebar"  data-element="body">
            <div className="sidebar__head">
                <h3>
                    Filters
                </h3>
                <button className="btn btn--only-img btn--white-bg">
                    <img src={arrows} alt={"close"} />
                </button>
            </div>
            <div className="sidebar__range-sliders" data-element="slidersWrapper">
                {
                    sliders.map(slider => <DoubleSlider key={slider.type} type={slider.type} min={slider.min} max={slider.max} />)
                }
            </div>
            <form className="sidebar__form"  data-element="form">
                {
                    filterListsProps.map(data => <FilterList key={data[0]} title={data[0]} filters={data[1]} />)
                }
            </form>
            <button className="btn btn--large-font btn--violet btn--full-width" data-element="button" onClick={() => dispatch({type: CLEAR_FORM})}>
                CLEAR ALL FILTERS
            </button>
        </aside>
    )
}