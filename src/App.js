import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Books from "./pages/books";
import Rentals from "./components/rentals";
import Movies from "./pages/movies";
import Home from "./pages/home";
import NotFound from "./components/notFound";
import ProtectedRoute from "./components/common/protectedRoute";
import MoviesNavbar from "./components/moviesNavbar";
import MovieForm from "./pages/movieForm";
import LoginForm from "./pages/loginForm";
import RegisterForm from "./pages/registerForm";
import Logout from "./pages/logout";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <div className="row">
          <div className="col-1">
            <MoviesNavbar user={user} />
          </div>
          <div className="col-11">
            <main className="container">
              <Switch>
                <Route path="/register" component={RegisterForm} />
                <Route path="/login" component={LoginForm} />
                <Route path="/logout" component={Logout} />
                <ProtectedRoute path="/movies/:id" component={MovieForm} />
                <Route
                  path="/movies"
                  render={(props) => <Movies {...props} user={user} />}
                />
                <Route path="/books" component={Books} />
                <Route path="/rentals" component={Rentals} />
                <Route path="/not-found" component={NotFound} />
                <Route
                  path="/"
                  render={(props) => <Home {...props} user={user} />}
                />
                {/* <Redirect from="/" exact to="/movies" /> */}
                <Redirect to="/not-found" />
              </Switch>
            </main>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
