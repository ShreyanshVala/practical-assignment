import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const restaurants = [
  { id: 1, name: "Pizza Hut" },
  { id: 2, name: "Domino's" },
  { id: 3, name: "McDonald's" },
  { id: 4, name: "Subway" },
];

function RestaurantList() {
  const { state, dispatch } = useContext(FavoritesContext);

  return (
    <div>
      <h2>Restaurants</h2>

      {restaurants.map((restaurant) => {
        const isFavorite = state.favorites.includes(restaurant.id);

        return (
          <div
            key={restaurant.id}
            style={{
              marginBottom: "10px",
            }}
          >
            {restaurant.name}

            {isFavorite ? (
              <button
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FAVORITE",
                    payload: restaurant.id,
                  })
                }
              >
                Remove
              </button>
            ) : (
              <button
                onClick={() =>
                  dispatch({
                    type: "ADD_FAVORITE",
                    payload: restaurant.id,
                  })
                }
              >
                Add
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default RestaurantList;
