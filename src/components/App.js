import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import DrinksListContainer from "./DrinksListContainer";
import DrinksSearchContainer from "./DrinksSearchContainer";


function App() {

    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/drinkslistcontainer">
                    <DrinksListContainer />
                </Route>
                {/* <Route exact path="/drinkssearch">
                    <DrinksSearch />
                </Route> */}
                <Route exact path="/drinkssearchcontainer">
                    <DrinksSearchContainer />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    );

}

export default App;