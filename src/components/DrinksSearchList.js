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
    // console.log(obj);

    /* DELETES BOT OBJECT FROM DB.JSON */
//   function handleDeleteClick(event) {
//     event.stopPropagation();
//     fetch(`http://localhost:8002/bots/${bot.id}`, {
//       method: "DELETE",
//     })
//       .then((response) => response.json())
//       // .then(() => console.log(`bot ${bot.id} deleted!!!`))
//       .then(() => handleDeletBot(bot))
//   }

    // function handleAddClick(event) {
    //     console.log(obj)
    //     console.log("CLICKED ON!!!");

    //     event.stopPropagation();

    //     fetch("https://backend-p-2-project-flatiron.herokuapp.com/drinks", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(obj),
    //     })
    //         .then((r) => console.log(r.json()))
            
    // }


    return (
        <div>
            {/* DrinksSearchList */}
            <li 
                // onClick={handleAddClick}
                style={liStyle} 
                key={uuid()}
            >
                <img style={drinkStyle} src={src} alt="Drink Search" />
            </li>
        </div>
    );
}

export default DrinksSearchList;