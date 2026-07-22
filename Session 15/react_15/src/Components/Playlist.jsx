import { useSelector, useDispatch } from "react-redux";
import { addSong, removeSong } from "../features/playlistSlice";
import { useState } from "react";

function Playlist() {
  const songs = useSelector((state) => state.playlist.songs);

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !artist) return;

    dispatch(
      addSong({
        id: Date.now(),
        title,
        artist,
      }),
    );

    setTitle("");
    setArtist("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Spotify Playlist</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Song Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />

        <br />
        <br />

        <button>Add Song</button>
      </form>

      <hr />

      <h2>Playlist</h2>

      {songs.map((song) => (
        <div key={song.id}>
          <h3>{song.title}</h3>

          <p>{song.artist}</p>

          <button onClick={() => dispatch(removeSong(song.id))}>Remove</button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Playlist;
