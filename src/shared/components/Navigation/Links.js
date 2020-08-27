import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./Links.css";
import { AuthContext } from "../../context/auth-context";

const Links = () => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/new">New</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/cart">Cart</NavLink>
      </li>
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button type="button" onClick={auth.logout}>
            Logout
          </button>
        </li>
      )}
    </ul>
  );
};

export default Links;
