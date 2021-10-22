const CHANGE_CHECKED_FIELD = "CHANGE_CHECKED_FIELD"
const CLEAR_FORM = "CLEAR_FORM"

function changeCheckedField(payload){
    return {
        type: CHANGE_CHECKED_FIELD,
        payload
    }
}
export {
    CHANGE_CHECKED_FIELD,
    CLEAR_FORM,
    changeCheckedField
}