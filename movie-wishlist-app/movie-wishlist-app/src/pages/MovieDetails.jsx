import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { movies } from '../data/movies.js'

function MovieDetails() {
  const { id } = useParams()
  const movie = movies.find((m) => m.id === Number(id))

  if (!movie) {
    return (
      <div>
        <p>Movie not found.</p>
        <Link to="/">Back to Home</Link>
      </div>
    )
  }

  return (
    <div>
      <Link to="/">← Back</Link>
      <div style={{ marginTop: 12 }}>
        <img src={movie.image} alt={movie.title} style={{ width: '100%', maxWidth: 300, borderRadius: 10 }} />
        <h2>{movie.title} ({movie.year})</h2>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p>{movie.description}</p>
      </div>
    </div>
  )
}

export default MovieDetails
