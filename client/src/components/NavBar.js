import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({setUser, user}) {

  function handleLogOut(){
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header>
      <div>
        <NavLink to="/"> -Home- </NavLink>
        <NavLink to="/wineries"> -Wineries- </NavLink>
        <NavLink to="/users"> -Members- </NavLink>
        {!user ? <NavLink to="new_user"> -Create Account- </NavLink>:[]}<br/>
        {user ? <button onClick={handleLogOut}>Logout</button>:[]}
      </div>
    </header>
  );
}

export default NavBar;