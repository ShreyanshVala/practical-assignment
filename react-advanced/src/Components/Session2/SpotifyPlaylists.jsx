import React from "react";
import useFetchData from "../../Hooks/useFetchData";

function SpotifyPlaylists() {
  const { data, loading, error } = useFetchData(
    "https://fakestoreapi.com/products",
  );

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h1>Playlists</h1>

      {data.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
          }}
        >
          <img src={item.image} alt={item.title} width="120" />

          <h3>{item.title}</h3>

          <p>Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default SpotifyPlaylists;
