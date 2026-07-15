import React, { useContext } from "react";
import { PlaylistContext } from "../context/PlaylistContext";

const Playlist = React.memo(() => {
  console.log("Playlist Rendered");

  const { playlist, addSong } = useContext(PlaylistContext);

  return (
    <div>
      <h2>Spotify Playlist</h2>

      <ul>
        {playlist.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>

      <button onClick={addSong}>Add Song</button>
    </div>
  );
});

export default Playlist;
