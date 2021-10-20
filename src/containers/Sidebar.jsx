import {FilterList} from "../components/FilterList";

export function Sidebar(props){
    const {filters} = props
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

            </div>
            <form className="sidebar__form"  data-element="form">
                <FilterList filters={filters} />
            </form>
            <button className="btn btn--large-font btn--violet btn--full-width" data-element="button">
                CLEAR ALL FILTERS
            </button>
        </aside>
    )
}