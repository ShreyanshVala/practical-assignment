import React, { useState } from "react";
import useSearchMovies from "../Hooks/useSearchMovies";

function MovieList() {
  const [search, setSearch] = useState("Batman");

  const movies = useSearchMovies(search);

  return (
    <div>
      <h2>Movie Search</h2>

      <input
        type="text"
        value={search}
        placeholder="Search Movie..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <img src={movie.Poster} alt={movie.Title} width="120" />
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
