import React, { useState, useCallback } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Wishlist from './pages/Wishlist.jsx'
import MovieDetails from './pages/MovieDetails.jsx'

function App() {
  const [search, setSearch] = useState('')
  const [wishlist, setWishlist] = useState([])

  const handleToggleWishlist = useCallback((id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }, [])

  return (
    <div className="app">
      <nav>
        <Link to="/">🎬 Home</Link>
        <Link to="/wishlist">⭐ Wishlist ({wishlist.length})</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              search={search}
              setSearch={setSearch}
              wishlist={wishlist}
              onToggleWishlist={handleToggleWishlist}
            />
          }
        />
        <Route
          path="/wishlist"
          element={<Wishlist wishlist={wishlist} onToggleWishlist={handleToggleWishlist} />}
        />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="*" element={<p>Page not found. <Link to="/">Go home</Link></p>} />
      </Routes>
    </div>
  )
}

export default App
