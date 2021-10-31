import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer} from "../features/products/reducer";
import {filters} from "../features/filters/reducers";
import {sliders} from "../features/sliders/reducers";
import {pages} from "../features/pages/reducers";
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk)

const rootReducer =  combineReducers({
    products: reducer,
    filters,
    sliders,
    pages
})

export const store = createStore(
    rootReducer,
    undefined,
    middleware,
)

