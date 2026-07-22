import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSong, editSong } from "../features/playlist/playlistSlice";

function PlaylistForm() {
  const dispatch = useDispatch();

  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !artist) {
      alert("Please fill all fields");
      return;
    }

    if (id === null) {
      dispatch(
        addSong({
          id: Date.now(),
          name,
          artist,
        }),
      );
    } else {
      dispatch(
        editSong({
          id,
          name,
          artist,
        }),
      );

      setId(null);
    }

    setName("");
    setArtist("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Song Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />

      <button type="submit">{id === null ? "Add Song" : "Update Song"}</button>
    </form>
  );
}

export default PlaylistForm;
