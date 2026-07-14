import React from "react";
import PlaylistCard from "./Components/Session1/PlaylistCard";
import LikeCounter from "./Components/Session1/LikeCounter";
import FlipkartProductList from "./Components/Session1/FlipkartProductList";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>My Playlist</h1>

      <PlaylistCard song="Perfect" artist="Ed Sheeran" />

      <PlaylistCard song="Shape of You" artist="Ed Sheeran" />

      <PlaylistCard song="Blinding Lights" artist="The Weeknd" />

      <LikeCounter />

      <FlipkartProductList />
    </div>
  );
}

export default App;
