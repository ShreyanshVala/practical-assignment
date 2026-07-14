import React from "react";

const SongItem = React.memo(({ song, toggleFavorite }) => {
  console.log(song.name);

  return (
    <div>
      {song.name}

      <button onClick={() => toggleFavorite(song.id)}>
        {song.favorite ? "❤️" : "🤍"}
      </button>
    </div>
  );
});

export default SongItem;
