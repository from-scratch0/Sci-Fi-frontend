import React, { Component } from "react";
import Navbar from "./common/navbar";

class MoviesNavbar extends Component {
  navbarItems = [
    { path: "/movies", label: "Movies" },
    { path: "/customers", label: "Customers" },
    { path: "/rentals", label: "Rentals" },
    { path: "/login", label: "Login" },
    { path: "/register", label: "Register" },
  ];

  render() {
    return <Navbar navbarItems={this.navbarItems} />;
  }
}

export default MoviesNavbar;
