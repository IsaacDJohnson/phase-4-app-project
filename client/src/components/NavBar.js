import React from "react";
import { NavLink } from "react-router-dom";
import { useLogged } from "./UserContextProvider";

function NavBar({setUser}) {

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
        {useLogged ? <NavLink to="new_user"> -Create Account-   </NavLink>:[]}<br/>
        {!useLogged ? <button onClick={handleLogOut}>Logout</button>:[]}
      </div>
    </header>
  );
}

export default NavBar;