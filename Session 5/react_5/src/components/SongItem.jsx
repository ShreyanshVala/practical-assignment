import { useState } from "react";

function SongItem({ song, dispatch }) {
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(song.name);

  const saveSong = () => {
    dispatch({
      type: "EDIT_SONG",
      payload: {
        id: song.id,
        name: newName,
      },
    });

    setEditing(false);
  };

  return (
    <li style={{ marginBottom: "10px" }}>
      {editing ? (
        <>
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />

          <button onClick={saveSong}>Save</button>
        </>
      ) : (
        <>
          {song.name}

          <button
            onClick={() => setEditing(true)}
            style={{ marginLeft: "10px" }}
          >
            Edit
          </button>

          <button
            style={{ marginLeft: "10px" }}
            onClick={() =>
              dispatch({
                type: "REMOVE_SONG",
                payload: song.id,
              })
            }
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
}

export default SongItem;
