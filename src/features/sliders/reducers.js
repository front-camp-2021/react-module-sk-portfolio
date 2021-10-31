import {CHANGE_SLIDER_RANGE} from "./actions";
import {CLEAR_FORM} from "../filters/actions";
import {SLIDERS_INITIAL_STATE} from "fixtures";

export const sliders = function (state = SLIDERS_INITIAL_STATE, action){
        switch (action.type){
            case CHANGE_SLIDER_RANGE:
                return state.map(slider => {
                    return slider.type === action.payload.type ? {...slider, min: action.payload.min, max: action.payload.max} : slider
                })
            case CLEAR_FORM:
                return SLIDERS_INITIAL_STATE.map(slider => slider)
            default:
                return state
        }
}

