import {Switch, BrowserRouter, Route, Redirect} from "react-router-dom"

import { Home } from 'containers/Home'
import { WishList } from 'containers/WishList'
import {Cart} from "./containers/Cart";

function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/wishlist">
                    <WishList />
                </Route>
                <Route exact path="/cart-products">
                    <Cart />
                </Route>
                <Redirect to="./not-found"/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;

