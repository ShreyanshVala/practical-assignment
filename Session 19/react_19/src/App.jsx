import { useState } from "react";
import PlaylistForm from "./components/PlaylistForm";
import PlaylistList from "./components/PlaylistList";
import LoginForm from "./Components/LoginForm";

function App() {
  const [editSong, setEditSong] = useState(null);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>🎵 Playlist Manager</h1>

      <PlaylistForm editSong={editSong} setEditSong={setEditSong} />

      <PlaylistList setEditSong={setEditSong} />
      <LoginForm />
    </>
  );
}

export default App;
