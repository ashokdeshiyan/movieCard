import "./styles.css";
// import axios from "axios";
import { useEffect, useState } from "react";
import moviesData from "./movie.json";
import MovieCard from "./movieCard.jsx";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    setMovies(moviesData);
  }, []);

  useEffect(() => {
    if (genreFilter === "") {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter((movie) =>
        movie.genre.some(
          (genre) => genre.toLowerCase() === genreFilter.toLowerCase()
        )
      );
      setFilteredMovies(filtered);
    }
  }, [movies, genreFilter]);

  // seach movies

  const onChangeHandle = async (value) => {
    const searchResult = movies.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredMovies(searchResult);
  };

  const handleSearch = async () => {
    const searchResult = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredMovies(searchResult);
  };
  const clearFilters = () => {
    setGenreFilter("");
    setSearchValue("");
    setFilteredMovies(movies);
  };
  return (
    <div className="App">
      <h2>TOP100 MOVIES</h2>

      <div className="seach">
        <input
          className="query"
          type="text"
          value={searchValue}
          onChange={(e) => {
            onChangeHandle(e.target.value);
            setSearchValue(e.target.value);
          }}
          placeholder="Enter title"
        ></input>{" "}
        <button onClick={handleSearch}>Search</button>
        <div>
          <div className="filter">
            <label>Genre:</label>
            <select
              value={genreFilter}
              onChange={(e) => setGenreFilter(e.target.value)}
            >
              <option value="">All Genres</option>
              <option value="action">Action</option>
              <option value="comedy">Comedy</option>
              <option value="drama">Drama</option>
            </select>
            <button onClick={clearFilters}>Clear Filters</button>
          </div>
        </div>
      </div>
      <div className="container">
        {filteredMovies.length > 0
          ? filteredMovies.map((movie) => <MovieCard movie={movie} />)
          : movies.map((movie) => <MovieCard movie={movie} />)}
      </div>
    </div>
  );
};

export default App;
