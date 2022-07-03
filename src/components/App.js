// // import logo from './logo.svg';
// import { useState }  from "react";
// import '../App.css';

// function App() {
//   const [count, setCount] = useState(0);
  

//   return (
//     <div className="App">
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click!
//       </button>
//     </div>
//   );
// }

// export default App;


import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";


function App() {
  return (
    <div>
      {/*{code here}*/}
      <NavBar />
      <Switch>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/directors">
          <Directors />
        </Route>
        <Route exact path="/actors">
          <Actors />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
