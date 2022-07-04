import React from "react";

import { v4 as uuid } from "uuid";

const drinkStyle = {
    width: "10em"
}

const liStyle = {
    listStyleType: "none",
    float: "left"
}

function Drink({ drink }) {

    return (
        <div>
            <li key={uuid()} style={liStyle}><img style={drinkStyle} src={drink.strDrinkThumb} alt="My Drink" /></li>
        </div>
    );
}

export default Drink;