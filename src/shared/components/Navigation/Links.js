import React from "react";
import { NavLink } from "react-router-dom";

import "./Links.css";

const Links = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/new">New</NavLink>
      </li>
      <li>
        <NavLink to="/cart">Cart</NavLink>
      </li>
    </ul>
  );
};

export default Links;
