import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return (
    <header>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
    </header>
  );
}

export default NavBar;