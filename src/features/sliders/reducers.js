import {CHANGE_SLIDER_RANGE} from "./actions";
import {CLEAR_FORM} from "../filters/actions";

export const sliders = function (state = slidersInitialState, action){
        switch (action.type){
            case CHANGE_SLIDER_RANGE:
                return state.map(slider => {
                    return {...slider, min: slider.min, max: slider.max}
                })
            case CLEAR_FORM:
                return slidersInitialState.map(slider => slider)
            default:
                return state
        }
}

const slidersInitialState = [
    {
        min: 0,
        max: 500
    },
    {
        min: 0,
        max: 5,
    }
]