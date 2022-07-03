import React from "react";
import { movies } from "../data";
import { v4 as uuid } from "uuid";

function Movies() {
  /* MAP THROUGH MOVIES ARRAY OF OBJECTS */
  const movieItems = movies.map((movie, index) => (
    <div key={index}>
      <h2>Title: {movie.title}</h2>
      <p>Time: {movie.time}</p>
      Genres:
      <ul>
        {movie.genres.map((genre, index) => (
        //   <li key={index}>{genre}</li>
          <li key={uuid()}>{genre}</li>          
        ))}
      </ul>
    </div>
  ));


  return (
    <div>
      {/*{code here}*/}
      <h1>Movies Page</h1>
      {movieItems}
    </div>
  );
}

export default Movies;
