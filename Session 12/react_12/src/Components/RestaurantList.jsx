export default function RestaurantList({ restaurants }) {
  return (
    <div>
      <h2>Restaurant List</h2>

      {restaurants.length === 0 ? (
        <h3>No Restaurant Found</h3>
      ) : (
        restaurants.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.cuisine}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}
