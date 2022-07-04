import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import DrinksCollection from "./DrinksCollection";
import DrinksSearch from "./DrinksSearch";


function App() {

    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/drinkscollection">
                    <DrinksCollection />
                </Route>
                <Route exact path="/drinkssearch">
                    <DrinksSearch />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    );

}

export default App;