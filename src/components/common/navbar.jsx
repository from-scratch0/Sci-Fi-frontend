import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = ({ navbarItems }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand mb-0 h1 mr-5" to="/">
        科幻电梯
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-4 mt-4 mt-lg-0">
          {navbarItems.map((item) => (
            <li className="nav-item mr-4" key={item.path}>
              <NavLink className="nav-link" to={item.path}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
