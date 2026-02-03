import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-title">✈ Flight Management Portal</div>

      <div className="navbar-links">
        <Link to="/">Flights</Link>
        <Link to="/add">Add Flight</Link>
      </div>
    </div>
  );
};

export default Navbar;