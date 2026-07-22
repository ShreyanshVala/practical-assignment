import React from 'react'
import { movies } from '../data/movies.js'
import MovieCard from '../components/MovieCard.jsx'

function Wishlist({ wishlist, onToggleWishlist }) {
  const wishlisted = movies.filter((m) => wishlist.includes(m.id))

  return (
    <div>
      <h2>My Wishlist</h2>
      {wishlisted.length === 0 ? (
        <p>No movies added yet. Go add some from the Home page!</p>
      ) : (
        <div className="movie-grid">
          {wishlisted.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onToggleWishlist={onToggleWishlist}
              isWishlisted={true}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Wishlist
