import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function FavoriteList() {
  const { state } = useContext(FavoritesContext);

  return (
    <div>
      <h2>Favorite Restaurant IDs</h2>

      {state.favorites.length === 0 ? (
        <p>No Favorites</p>
      ) : (
        <ul>
          {state.favorites.map((id) => (
            <li key={id}>{id}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoriteList;
