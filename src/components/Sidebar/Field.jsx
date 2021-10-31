import {useDispatch} from "react-redux";
import {CHANGE_CHECKED_FIELD, fieldsAction} from "../../features/filters/actions";
import {GO_TO_START, paginationAction} from "../../features/pages/actions";


export function Field({value, isChecked}){
    const dispatch = useDispatch()
    const toggleCheckbox = () =>{
        dispatch(paginationAction(GO_TO_START))
        dispatch(fieldsAction(CHANGE_CHECKED_FIELD,value))
    }
    return (
        <label className="field field--checkbox sidebar__field" data-element="field">
            <input type="checkbox"  checked={isChecked} value={value} onChange={toggleCheckbox} />
                   <span className="field__checkbox-substitute">

                 </span>
                <span className="field__info">
                  <span className="field__name">
                     {value}
                 </span>
              </span>
        </label>
    )
}