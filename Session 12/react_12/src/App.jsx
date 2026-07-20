import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

import AddRestaurant from "./components/AddRestaurant";
import RestaurantList from "./components/RestaurantList";
import Filter from "./components/Filter";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [filter, setFilter] = useState("");

  const loadRestaurants = async () => {
    const querySnapshot = await getDocs(collection(db, "restaurants"));

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setRestaurants(data);
  };

  useEffect(() => {
    loadRestaurants();
  }, []);

  const filteredRestaurants = restaurants.filter((item) =>
    item.cuisine.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div style={{ width: "500px", margin: "auto" }}>
      <h1>Restaurant App</h1>

      <AddRestaurant loadRestaurants={loadRestaurants} />

      <br />

      <Filter filter={filter} setFilter={setFilter} />

      <RestaurantList restaurants={filteredRestaurants} />
    </div>
  );
}

export default App;
