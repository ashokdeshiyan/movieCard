import React from "react";
import logo from "./newyt.png";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="movie-card-header">
        <h3 className="movie-card-title">{movie.title}</h3>
        <span className="movie-card-rating">{movie.rating}</span>
      </div>

      <div className="movie-card-image">
        {" "}
        <img
          src={
            movie.image !== "N/A"
              ? movie.image
              : "https://via.placeholder.com/400"
          }
          alt={movie.title}
        />
        <div className="movie-card-description">
          <p>{movie.description}</p>
        </div>
      </div>
      <div className="movie-card-footer">
        <p className="movie-card-genre">{movie.genre.join(", ")}</p>

        <p className="movie-card-director">{movie.director}</p>
        <a href={movie.trailer} target="_blank" className="movie-card-trailer">
          <img src={logo} />
        </a>
      </div>

     
    </div>

  );
};

export default MovieCard;
