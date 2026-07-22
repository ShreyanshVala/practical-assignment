import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../redux/actions";

function PlaylistManager() {
  const [song, setSong] = useState("");

  const dispatch = useDispatch();

  const songs = useSelector((state) => state.songs);

  const handleAdd = () => {
    if (song === "") return;

    dispatch(addSong(song));

    setSong("");
  };

  return (
    <div>
      <h2>Playlist Manager</h2>

      <input
        type="text"
        placeholder="Song Name"
        value={song}
        onChange={(e) => setSong(e.target.value)}
      />

      <button onClick={handleAdd}>Add Song</button>

      <ul>
        {songs.map((item, index) => (
          <li key={index}>
            {item}

            <button onClick={() => dispatch(removeSong(index))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlaylistManager;
