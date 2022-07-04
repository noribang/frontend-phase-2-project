import React from "react";
import Drink from "./Drink";

import { v4 as uuid } from "uuid";


function DrinksList({ drinksCollect }) {
    // console.log("drinksCollect: ", drinksCollect)
    const displayDrinks = drinksCollect.map((drink, idx) => <Drink drink={drink} key={uuid()}/>)

    return (
        <div>
            <ul>{displayDrinks}</ul>
        </div>
    );
}

export default DrinksList;