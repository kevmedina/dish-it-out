import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <span>Dish-It-Out</span>
      <nav>
        <NavLink className="link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/login">
          Login
        </NavLink>
        <NavLink className="link" to="/signup">
          Sign Up
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
