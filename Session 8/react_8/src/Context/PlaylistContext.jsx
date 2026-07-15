import { createContext, useMemo, useState } from "react";

export const PlaylistContext = createContext();

export function PlaylistProvider({ children }) {
  const [playlist, setPlaylist] = useState(["Shape of You", "Believer"]);

  const [count, setCount] = useState(0);

  const addSong = () => {
    setPlaylist([...playlist, `New Song ${playlist.length + 1}`]);
  };

  // Memoize context value
  const value = useMemo(() => {
    return {
      playlist,
      addSong,
    };
  }, [playlist]);

  return (
    <PlaylistContext.Provider value={value}>
      <div style={{ padding: "20px" }}>
        <button onClick={() => setCount(count + 1)}>
          Increase Count ({count})
        </button>

        <br />
        <br />

        {children}
      </div>
    </PlaylistContext.Provider>
  );
}
