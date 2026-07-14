import { useState } from "react";
import useSearchMovies from "./Hooks/useSearchMovies";

function App() {
  const [search, setSearch] = useState("");

  const { movies, loading, error } = useSearchMovies(search);

  return (
    <div>
      <h1>Movie Search</h1>

      <input
        type="text"
        placeholder="Search Movie"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <h2>Loading...</h2>}

      {error && <h2>{error}</h2>}

      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <img src={movie.Poster} alt={movie.Title} width="150" />
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
