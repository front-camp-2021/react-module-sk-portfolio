import {Field} from "./Field";
import {useEffect, useState} from "react";

export function FilterList(props){
    const {filters} = props
    const [activeFiltersKey, setActiveFilterName] = useState([])
    const arr = []
    useEffect(() => {
        console.log(activeFiltersKey)
    },[activeFiltersKey])

    const f = () => {
        console.log('loh')
    }

    return (
        <div className="sidebar__filter" data-element="body">
            <h3>
                <strong>
                    title
                </strong>
            </h3>
            {
                filters.map(filter =>{
                    return <Field
                        key={filter}
                        name={filter}
                        value={filter}
                        setIsActiveFilter = {() => setActiveFilterName(filter)}
                        f = {() => f}
                    />
                })
            }
        </div>
    )
}