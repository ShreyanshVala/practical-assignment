import { useReducer, useState } from "react";
import SongItem from "./components/SongItem";
import { playlistReducer, initialState } from "./playlistReducer";

function App() {
  const [songs, dispatch] = useReducer(playlistReducer, initialState);
  const [songName, setSongName] = useState("");

  const addSong = () => {
    if (songName.trim() === "") return;

    dispatch({
      type: "ADD_SONG",
      payload: songName,
    });

    setSongName("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#191414",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          width: "500px",
          background: "#282828",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 0 15px rgba(0,0,0,0.4)",
          color: "white",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#1DB954",
            marginBottom: "25px",
          }}
        >
          🎵 Spotify Playlist
        </h1>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Enter song name..."
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              fontSize: "16px",
            }}
          />

          <button
            onClick={addSong}
            style={{
              background: "#1DB954",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Add
          </button>
        </div>

        <hr style={{ borderColor: "#555" }} />

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            marginTop: "20px",
          }}
        >
          {songs.map((song) => (
            <SongItem key={song.id} song={song} dispatch={dispatch} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
