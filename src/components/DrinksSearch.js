import React, { useState } from "react";



function DrinksSearch({ handleSearchFormSubmit }) {
    const [newSearch, setNewSearch] = useState("");

    /* UPDATES LOCAL STATE NEWSEARCH */
    function handleSearch(event) {
        event.stopPropagation();
        console.log(event.target.value);
        /* UPDATES NEW SEARCH STATE */
        setNewSearch(event.target.value);
        // console.log(event.target.value);
        /* CLEAR OUT INPUT VALUE */
        // event.target.value="";
    }
    /* PUSHES NEW SEARCH UP TO PARENT COMPONENT */
    function handleSubmit(event) {
        // Prevent default page load.
        event.preventDefault();
        /* PUSH LOCAL STATE NEWSEARCH DATA UP TO PARENT COMPONENT */
        handleSearchFormSubmit(newSearch);
        // console.log("newSearch", newSearch)
        /* CLEAR OUT INPUT VALUE */
        // event.target.value="";
    }
    
    return (
        <div>
            <h1>Drinks Search</h1>
            <form 
            onSubmit={handleSubmit}
            >
                <label>Enter a letter:</label>
                <input 
                type="text" 
                name="name"
                placeholder="Search drinks by letter..."
                value={newSearch}
                onChange={handleSearch}
                ></input>
                <button type="submit">Find Drinks</button>
            </form>
        </div>
    );
}

export default DrinksSearch;