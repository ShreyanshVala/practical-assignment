import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunk
export const fetchRestaurants = createAsyncThunk(
  "restaurant/fetchRestaurants",
  async (city, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://api.sampleapis.com/restaurants/restaurants",
      );

      let data = response.data;

      // Filter by city
      if (city) {
        data = data.filter(
          (restaurant) =>
            restaurant.city &&
            restaurant.city.toLowerCase() === city.toLowerCase(),
        );
      }

      return data;
    } catch (error) {
      return rejectWithValue("Failed to fetch restaurants.");
    }
  },
);

const restaurantSlice = createSlice({
  name: "restaurant",

  initialState: {
    restaurants: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchRestaurants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.loading = false;
        state.restaurants = action.payload;
      })

      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default restaurantSlice.reducer;
