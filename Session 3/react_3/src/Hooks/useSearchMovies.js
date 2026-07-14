import { useState, useEffect } from "react";

function useSearchMovies(query) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) return;

    fetch(`https://www.omdbapi.com/?apikey=861f289&s=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query]);

  return movies;
}

export default useSearchMovies;
