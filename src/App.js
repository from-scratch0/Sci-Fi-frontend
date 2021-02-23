import React from "react";
import "./App.css";
import Customers from "./pages/customers";
import Rentals from "./components/rentals";
import Movies from "./pages/movies";
import NotFound from "./components/notFound";
import { Route, Switch, Redirect } from "react-router-dom";
import MoviesNavbar from "./components/moviesNavbar";
import MovieForm from "./pages/movieForm";
import LoginForm from "./pages/loginForm";
import RegisterForm from "./pages/registerForm";

function App() {
  return (
    <React.Fragment>
      <MoviesNavbar />
      <main className="container">
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
