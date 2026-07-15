import Cart from "./components/Cart";
import Profile from "./components/Profile";
import UpdateName from "./components/UpdateName";
import RestaurantList from "./components/RestaurantList";
import FavoriteList from "./components/FavoriteList";
import Header from "./components/Header";
import ToggleButton from "./components/ToggleButton";
import Playlist from "./components/Playlist";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Context API Practical</h1>

      <hr />

      <h2>1. Theme Context</h2>
      <Header />
      <ToggleButton />

      <hr />

      <h2>2. Restaurant Favorites</h2>
      <RestaurantList />
      <FavoriteList />

      <hr />

      <h2>3. Playlist (useMemo + React.memo)</h2>
      <Playlist />

      <hr />

      <h2>4. Auth Context</h2>
      <Profile />
      <UpdateName />

      <hr />

      <h2>5. Shopping Cart</h2>
      <Cart />
    </div>
  );
}

export default App;
