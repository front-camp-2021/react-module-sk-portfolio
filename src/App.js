import {Switch, BrowserRouter, Route, Redirect} from "react-router-dom"

import { Home } from 'containers/Home'
import { WishList } from 'containers/WishList'
import {Cart} from "./containers/Cart";
import { NotFound } from "containers/notFound/notFound";
import Card from "components/Card";
import { SingleCard } from "containers/SingleCard/SingleCard";

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
                <Route exact path="/cart">
                    <Cart />
                </Route>
                <Route path="/not-found" component={NotFound} />
                <Route path="/product/:id">
                    <SingleCard />
                </Route>
                <Redirect to="./not-found"/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;

