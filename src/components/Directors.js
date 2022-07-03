import React from "react";
import { directors } from "../data";
import { v4 as uuid } from "uuid";

function Directors() {
  /* MAP THROUGH DIRECTORS ARRAY OF OBJECTS */
  const directorItems = directors.map((director, index) => (
    <div key={index}>
      <h2>Name: {director.name}</h2>
      Movies:
      <ul>
        {director.movies.map((movie) => (
        //   <li key={index}>{movie}</li>
          <li key={uuid()}>{movie}</li>
        ))}
      </ul>
    </div>

  ));


  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directorItems}
    </div>
  );
}

export default Directors;
