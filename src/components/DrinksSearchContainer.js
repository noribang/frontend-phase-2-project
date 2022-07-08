import React, { useState } from "react";
import DrinksSearch from "./DrinksSearch";
import DrinksSearchList from "./DrinksSearchList";



function DrinksSearchContainer({ handleAddDrink }) {
    /* STATE */
    const [searchImgDrink, setSearchImgDrink] = useState("");
    const [searchImgArr, setSearchImgArr] = useState([]);

    /* UPDATES STATE FROM NEW SEARCH PASSED FROM CHILD DRINKSSEARCH */
    function handleSearchFormSubmit(newSearch) {
        /* UPDATE searchImgDrink */
        setSearchImgDrink(newSearch);
        // console.log(searchImgDrink);
    } 

    /* FETCH FROM DRINKS API */
    function fetchDrinks() {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchImgDrink}`)
            // .then((r) => console.log("search: ",  r.json()))
            .then((r) => r.json())
            // .then((data) => console.log("search data: ", data))
            .then((data) => {
                // console.log("data.drinks: ", data.drinks);
                // const newArr = data.drinks.filter((obj, idx) => idx < 10);
                const newArr = data.drinks.filter((obj) => obj);
                // console.log("newArr ", newArr);
                /* UPDATE STATE searchImgArr */
                setSearchImgArr(newArr);
            })
            // console.log("searchImgArr ", searchImgArr);
    }

    /* CALL FETCHDRINKS */
    fetchDrinks();

    return (
        <div>
            {/* DrinksSearchContainer */}
            <DrinksSearch handleSearchFormSubmit={handleSearchFormSubmit} />
            {/* DrinksSearchList */}
            <div>
                <ul>
                    {searchImgArr.map((obj, idx) => <DrinksSearchList 
                                                        key={idx} 
                                                        src={obj.strDrinkThumb}
                                                        obj={obj}
                                                        handleAddDrink={handleAddDrink}
                                                    />)}
                </ul>
            </div>

        </div>
    );

}

export default DrinksSearchContainer;