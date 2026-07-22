export const addSong = (song) => {
  return {
    type: "ADD_SONG",
    payload: song,
  };
};

export const removeSong = (index) => {
  return {
    type: "REMOVE_SONG",
    payload: index,
  };
};
