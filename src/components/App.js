import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import DrinksListContainer from "./DrinksListContainer";
import DrinksSearchContainer from "./DrinksSearchContainer";


function App() {
    /* ALL DRINKS. STATE FOR DRINKS COLLECTION */
    const [drinksCollect, setDrinksCollect] = useState([]);
    /* DRINKS SEARCH STATE */
    //   const [drinksSearch, setDrinksSearch] = useState([]);

    /* ADDS OBJECT OF DRINK CLICKED ON FROM DRINKS SEARCH PAGE */
    function handleAddDrink(obj) {
        /* UPDATES DRINKSCOLLECT STATE. */
        setDrinksCollect([...drinksCollect, obj]);
    }
        
    /* FETCH DATA FROM DB.JSON DRINKS ARRAY OF OBJECTS */
    /* USEEFFECT WITH EMPTY ARRAY DEPENDENCY, SO, THAT 
    RUNS ONCE ONLY ON FIRST PAGE LOAD. */
    useEffect(() => {
        fetch("https://backend-p-2-project-flatiron.herokuapp.com/drinks")
        // .then((r) => console.log(r.json()))
        .then((r) => r.json())
        /* RETURNS ARRAY OF OBJECTS. */
        /* UPDATE DRINKSCOLLECT STATE WITH ARRAY OF OBJECTS. */
        // .then((data) => console.log(data))
        .then((data) => setDrinksCollect([...data]))
    }, []);
    // console.log("drinksCollect ", drinksCollect)


    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/drinkslistcontainer">
                    <DrinksListContainer 
                        drinksCollect={drinksCollect} 
                        setDrinksCollect={setDrinksCollect} 
                    />
                </Route>
                <Route exact path="/drinkssearchcontainer">
                    <DrinksSearchContainer 
                        handleAddDrink={handleAddDrink} 
                    />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    );

}

export default App;