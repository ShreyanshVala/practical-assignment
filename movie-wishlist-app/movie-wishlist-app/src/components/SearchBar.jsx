import React from 'react'

function SearchBar({ value, onChange }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search movies..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default React.memo(SearchBar)
