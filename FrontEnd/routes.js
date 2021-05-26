import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Menu from "./pages/Menu"
import Order from "./pages/Order"
import Item from "./pages/Item"

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Menu} />
                <Route path="/order" component={Order} />
                <Route path="/item" component={Item} />
            </Switch>
        </BrowserRouter>
    )   
}