import {useDispatch} from "react-redux";
import {changeCheckedField} from "../features/filters/actions";

export function Field({value, isChecked}){
    const dispatch = useDispatch()
    const toggleCheckbox = () =>{
        dispatch(changeCheckedField(value))
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