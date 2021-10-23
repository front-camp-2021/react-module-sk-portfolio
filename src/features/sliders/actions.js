const CHANGE_SLIDER_RANGE = "CHANGE_SLIDER_RANGE"

function changeSliderRange(payload){
    return{
        type: CHANGE_SLIDER_RANGE,
        payload
    }
}

export {changeSliderRange, CHANGE_SLIDER_RANGE}