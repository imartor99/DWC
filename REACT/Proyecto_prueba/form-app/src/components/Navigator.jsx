import React from "react";
import { NavLink } from "react-router-dom";

const Navigator = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Posts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
