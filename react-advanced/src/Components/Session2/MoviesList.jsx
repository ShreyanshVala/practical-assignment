import React from "react";
import useTrendingMovies from "../../Hooks/useTrendingMovies";

function MoviesList() {
  const { data, loading, error } = useTrendingMovies();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>Trending Movies</h1>

      {data.map((movie) => (
        <div
          key={movie.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />

          <h3>{movie.title}</h3>

          <p>⭐ Rating : {movie.vote_average}</p>

          <p>Release Date : {movie.release_date}</p>

          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
}

export default MoviesList;
