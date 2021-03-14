import React, { Component } from "react";
import Navbar from "./common/navbar";
import auth from "../services/authService";

class MoviesNavbar extends Component {
  navbarItems = [
    { path: "/movies", label: "影单" },
    { path: "/books", label: "书单" },
    { path: "/rentals", label: "科普" },
  ];

  user = auth.getCurrentUser();
  
  loginItem = { path: "/login", label: "登录" };
  registerItem = { path: "/register", label: "注册" };

  userItem = { path: "/profile", label: `乘客：${this.user && this.user.name}`};
  logoutItem = { path: "/logout", label: "退出" };

  constructor() {
    super();
    if (this.user) {
      this.navbarItems.push(this.userItem);
      this.navbarItems.push(this.logoutItem);
    }
    else {
      this.navbarItems.push(this.loginItem);
      this.navbarItems.push(this.registerItem);
    }
  }

  render() {
    return <Navbar navbarItems={this.navbarItems} />;
  }
}

export default MoviesNavbar;
