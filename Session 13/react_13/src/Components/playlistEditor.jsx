import { useState } from "react";
import { db } from "../firebase";

import { doc, updateDoc, deleteDoc } from "firebase/firestore";

function PlaylistEditor() {
  const [id, setId] = useState("");

  const [name, setName] = useState("");

  // UPDATE

  const updatePlaylist = async () => {
    if (!id || !name) {
      alert("Enter ID and Name");
      return;
    }

    try {
      const playlistRef = doc(db, "playlists", id);

      await updateDoc(playlistRef, {
        name: name,
      });

      alert("Playlist Updated");
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE

  const deletePlaylist = async () => {
    if (!id) {
      alert("Enter Document ID");
      return;
    }

    const confirmDelete = window.confirm("Are you sure?");

    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "playlists", id));

      alert("Deleted");

      setId("");

      setName("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Playlist Editor</h2>

      <input
        placeholder="Document ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <br />
      <br />

      <input
        placeholder="New Playlist Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <button onClick={updatePlaylist}>Update</button>

      <button onClick={deletePlaylist}>Delete</button>
    </div>
  );
}

export default PlaylistEditor;
