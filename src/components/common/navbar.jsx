import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = ({ navbarItems, userItems }) => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light top-nav">
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
          <ul className="navbar-nav flex-column mr-auto mt-2 mt-lg-0">
            <Link className="navbar-brand mb-0 h1 mr-4" to="/">
              <img src="https://i.loli.net/2021/05/20/EWA8zDwrORmsI9q.png" width="30" height="30" className="d-inline-block align-top mr-2" alt="" />
              {/* 科幻电梯 */}
            </Link>
            {navbarItems.map((item) => (
              <li className="nav-item" key={item.path}>
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
