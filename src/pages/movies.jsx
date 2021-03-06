import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "../components/common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "../components/common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "../components/moviesTable";
import _ from "lodash";
import { Link } from "react-router-dom";
import SearchBox from "../components/common/searchBox";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
  };

  // 与服务器通信的时机
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()]; // Adding All Genres

    this.setState({ movies: getMovies(), genres });
  }

  // 删除列表项
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies }); // movies: movies
  };

  // 不要直接操作state copy以后操作
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1, searchQuery: "" }); 
  }; // 改变分类时需要回到第一页 // searchBox是受控组件 如果设为null或undefined 会被认为在操作不受控组件从而出错

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData() {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      movies: allMovies,
      sortColumn,
      searchQuery,
    } = this.state;

    // 先搜索或分类、然后排序，最后分页
    let filtered = allMovies;
    if (searchQuery)
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter((m) => m.genre._id === selectedGenre._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  }

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      searchQuery,
    } = this.state;

    if (count === 0) return <p>There are no movies in the database.</p>;

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <Link
            to="/movies/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Movie
          </Link>
          <p>Showing {totalCount} movies in the database.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount} 
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
