const CHANGE_SLIDER_RANGE = "CHANGE_SLIDER_RANGE"

function changeSliderRange(type,payload){
    return{
        type: type,
        payload: payload
    }
}

export {changeSliderRange, CHANGE_SLIDER_RANGE}