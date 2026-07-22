import { useSelector, useDispatch } from "react-redux";
import { deleteSong } from "../features/playlist/playlistSlice";

function PlaylistList({ setId, setName, setArtist }) {
  const dispatch = useDispatch();

  const songs = useSelector((state) => state.playlist.songs);

  return (
    <>
      <h2>Playlist</h2>

      {songs.map((song) => (
        <div key={song.id}>
          <h3>{song.name}</h3>

          <p>{song.artist}</p>

          <button
            onClick={() => {
              setId(song.id);
              setName(song.name);
              setArtist(song.artist);
            }}
          >
            Edit
          </button>

          <button onClick={() => dispatch(deleteSong(song.id))}>Remove</button>

          <hr />
        </div>
      ))}
    </>
  );
}

export default PlaylistList;
