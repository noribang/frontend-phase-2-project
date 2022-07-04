import React from "react";
import { NavLink } from "react-router-dom";

const navBarStyle = {
    marginRight: "1em",
}

function NavBar() {
  
  return (
    <div >
      <NavLink exact to="/" style={navBarStyle}>Home</NavLink>
      <NavLink exact to="/drinkscollection" style={navBarStyle}>Drinks Collection</NavLink>
      <NavLink exact to="/drinkssearch" style={navBarStyle}>Drinks Search</NavLink>
           
    </div>
  );
}

export default NavBar;
