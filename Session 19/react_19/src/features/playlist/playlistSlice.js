import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [
    {
      id: 1,
      name: "Shape of You",
      artist: "Ed Sheeran",
    },
    {
      id: 2,
      name: "Perfect",
      artist: "Ed Sheeran",
    },
  ],
};

const playlistSlice = createSlice({
  name: "playlist",

  initialState,

  reducers: {
    // Add Song
    addSong: (state, action) => {
      state.songs.push(action.payload);
    },

    // Edit Song
    editSong: (state, action) => {
      const { id, name, artist } = action.payload;

      const song = state.songs.find((item) => item.id === id);

      if (song) {
        song.name = name;
        song.artist = artist;
      }
    },

    // Delete Song
    deleteSong: (state, action) => {
      state.songs = state.songs.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addSong, editSong, deleteSong } = playlistSlice.actions;

export default playlistSlice.reducer;
