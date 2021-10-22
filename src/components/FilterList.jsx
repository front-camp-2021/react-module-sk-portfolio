import {Field} from "./Field";

export function FilterList({filters}){
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
                        key={filter.name}
                        name={filter.name}
                        value={filter.name}
                        isChecked={filter.isChecked}
                    />
                })
            }
        </div>
    )
}