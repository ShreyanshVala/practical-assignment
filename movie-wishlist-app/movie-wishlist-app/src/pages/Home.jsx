import React, { useMemo, useCallback } from 'react'
import SearchBar from '../components/SearchBar.jsx'
import MovieCard from '../components/MovieCard.jsx'
import { movies } from '../data/movies.js'

function Home({ search, setSearch, wishlist, onToggleWishlist }) {
  const filtered = useMemo(() => {
    return movies.filter((m) =>
      m.title.toLowerCase().includes(search.toLowerCase())
    )
  }, [search])

  // Stable reference so MovieCard (React.memo) doesn't re-render
  // just because Home re-rendered from a keystroke.
  const handleToggle = useCallback((id) => onToggleWishlist(id), [onToggleWishlist])

  return (
    <div>
      <SearchBar value={search} onChange={setSearch} />
      <div className="movie-grid">
        {filtered.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onToggleWishlist={handleToggle}
            isWishlisted={wishlist.includes(movie.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
