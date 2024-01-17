import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <p>
        <span>Recepe</span>site
      </p>

      <span className="material-symbols-outlined">
        <NavLink to="/menue">menu</NavLink>
      </span>
      <span className="material-symbols-outlined">
        <NavLink to="/Infopage">search</NavLink>
      </span>
      <span className="material-symbols-outlined">
        <NavLink to="/">home</NavLink>
      </span>
      <span className="material-symbols-outlined">
        <NavLink to="/Login"> account_circle </NavLink>
      </span>
    </div>
  );
}

export default Navbar;
