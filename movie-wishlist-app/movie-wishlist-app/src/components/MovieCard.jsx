import React from 'react'
import { Link } from 'react-router-dom'

// Same bug/fix pattern as the Recipe app: without React.memo, every
// MovieCard re-rendered on each keystroke in the search box (visible via
// React DevTools "Highlight updates when components render"). Wrapping
// in React.memo + passing a stable onToggleWishlist (useCallback in
// parent) stops cards from re-rendering unless their own props change.

function MovieCard({ movie, onToggleWishlist, isWishlisted }) {
  console.log('Rendering movie card:', movie.title)
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={movie.image} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
      </Link>
      <button className="wishlist-btn" onClick={() => onToggleWishlist(movie.id)}>
        {isWishlisted ? '★ In Wishlist' : '☆ Add to Wishlist'}
      </button>
    </div>
  )
}

export default React.memo(MovieCard)
