import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../features/restaurantSlice";
import { useState } from "react";

function RestaurantList() {
  const dispatch = useDispatch();

  const { restaurants, loading, error } = useSelector(
    (state) => state.restaurant,
  );

  const [city, setCity] = useState("");

  const handleSearch = () => {
    dispatch(fetchRestaurants(city));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Restaurant Finder</h1>

      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      <hr />

      {loading && <h2>Loading...</h2>}

      {error && <h2 style={{ color: "red" }}>{error}</h2>}

      {restaurants.length === 0 && !loading && !error && (
        <h3>No Restaurant Found</h3>
      )}

      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <h3>{restaurant.name}</h3>

          <p>{restaurant.city}</p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default RestaurantList;
