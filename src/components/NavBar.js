import React from "react";
import { NavLink } from "react-router-dom";

const navBarStyle = {
    marginRight: "1em",
}

function NavBar() {
  
  return (
    <div >
      <NavLink exact to="/" style={navBarStyle}>Home</NavLink>
      <NavLink exact to="/drinkslistcontainer" style={navBarStyle}>My Drinks</NavLink>
      <NavLink exact to="/drinkssearchcontainer" style={navBarStyle}>Drinks Search</NavLink>
           
    </div>
  );
}

export default NavBar;
