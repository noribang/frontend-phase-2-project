import React from "react";
import DrinksList from "./DrinksList";
// import { v4 as uuid } from "uuid";


function DrinksListContainer({ drinksCollect }) {
    // /* ALL DRINKS. STATE FOR DRINKS COLLECTION */
    // const [drinksCollect, setDrinksCollect] = useState([]);
    // /* DRINKS SEARCH STATE */
    // //   const [drinksSearch, setDrinksSearch] = useState([]);
        
    // /* FETCH DATA FROM DB.JSON DRINKS ARRAY OF OBJECTS */
    // /* USEEFFECT WITH EMPTY ARRAY DEPENDENCY, SO, THAT 
    // RUNS ONCE ONLY ON FIRST PAGE LOAD. */
    // useEffect(() => {
    //     fetch("https://backend-p-2-project-flatiron.herokuapp.com/drinks")
    //     // .then((r) => console.log(r.json()))
    //     .then((r) => r.json())
    //     /* RETURNS ARRAY OF OBJECTS. */
    //     /* UPDATE DRINKSCOLLECT STATE WITH ARRAY OF OBJECTS. */
    //     // .then((data) => console.log(data))
    //     .then((data) => setDrinksCollect([...data]))
    // }, []);
    // // console.log("drinksCollect ", drinksCollect)
    
    return (
        <div>
            {/* <DrinksSearch /> */}
            <h1>My Drinks</h1>
            <DrinksList drinksCollect={drinksCollect} />
        </div>
    );
}

export default DrinksListContainer;