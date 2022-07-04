import React from "react";
import { NavLink } from "react-router-dom";

const navBarStyle = {
    marginRight: "1em",
}

function NavBar() {
  
  return (
    <div className="navbar">
      <NavLink exact to="/" style={navBarStyle}>Home</NavLink>
      <NavLink exact to="/movies" style={navBarStyle}>Movies</NavLink>
      <NavLink exact to="/directors" style={navBarStyle}>Directors</NavLink>
      <NavLink exact to="/actors">Actors</NavLink>
           
    </div>
  );
}

export default NavBar;
