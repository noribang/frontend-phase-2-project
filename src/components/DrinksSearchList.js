import React from "react";

import { v4 as uuid } from "uuid";

const drinkStyle = {
    width: "10em"
}

const liStyle = {
    listStyleType: "none",
    float: "left"
}

function DrinksSearchList({ src, obj }) {
    console.log(obj);

    return (
        <div>
            {/* DrinksSearchList */}
            <li style={liStyle} key={uuid()}><img style={drinkStyle} src={src} alt="Drink Search"></img></li>
        </div>
    );
}

export default DrinksSearchList;