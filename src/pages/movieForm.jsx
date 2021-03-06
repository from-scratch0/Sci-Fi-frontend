import React from "react";
import Form from "../components/common/form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";
import { getMovie, saveMovie } from "../services/fakeMovieService";

class MovieForm extends Form {
  state = {
    data: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
    options: [],
    errors: {},
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ options: genres });

    const movieId = this.props.match.params.id;
    console.log(movieId);
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found"); // 不是push

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) { // 视图模型
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label("Name in Stock"),
    dailyRentalRate: Joi.number().min(0).max(10).required().label("Rate"),
  };

  doSubmit = () => {
    // Call the server
    console.log(this.state.data.genreId);
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.options)}
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
