import React from "react";
import { actors } from "../data";
import { v4 as uuid } from "uuid";

function Actors() {
  /* MAP THROUGH ACTORS ARRAY */
  const actorItems = actors.map((actor, index) => (
    <div key={index}>
      <h2>Name: {actor.name}</h2>
      Movies:
      <ul>
        {actor.movies.map((movie, index) => (
        //   <li key={index}>{movie}</li>
          <li key={uuid()}>{movie}</li>
        ))}
      </ul>
    </div>
  ));



  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actorItems}
    </div>
  );
}

export default Actors;
