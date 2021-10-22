import {combineReducers, createStore} from "redux";
import {products} from "../features/products/reducers/products";
import {filters} from "../features/filters/reducers";
import {composeWithDevTools} from 'redux-devtools-extension'

export const store = createStore(
    combineReducers({
        products,
        filters
    }),
    composeWithDevTools()
)

