import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";

import userIcon from "../../icons/user.svg";
import exitIcon from "../../icons/exit.svg";
import "./Links.css";

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
          <NavLink to="/me">
            <img
              src={userIcon}
              alt="Me"
              className="links__me"
              style={{ fill: "white" }}
            />
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <img
            src={exitIcon}
            alt="Logout"
            onClick={auth.logout}
            className="links__logout"
          />
        </li>
      )}
    </ul>
  );
};

export default Links;
