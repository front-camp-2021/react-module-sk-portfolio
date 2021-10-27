import {combineReducers, createStore} from "redux";
import {products} from "../features/products/products";
import {filters} from "../features/filters/reducers";
import {sliders} from "../features/sliders/reducers";
import {pages} from "../features/pages/reducers";
import {composeWithDevTools} from 'redux-devtools-extension'

export const store = createStore(
    combineReducers({
        products,
        filters,
        sliders,
        pages
    }),
    composeWithDevTools()
)

