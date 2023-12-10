import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const advertsSlice = createSlice({
  name: "adverts",
  initialState: {
    adverts: [],
    isLoading: false,
    error: null,
    favorites: [],
  },
  reducers: {
    addToFavorites(state, action) {
      state.favorites = [...state.favorites, action.payload];
      // const advertToAdd = action.payload;
      // state.favorites.push(advertToAdd);
    },
    removeFromFavorites: (state, action) => {
      const advertToRemoveId = action.payload;
      state.favorites = state.favorites.filter(
        (advert) => advert.id !== advertToRemoveId
      );
    },
    resetAdverts(state) {
      state.adverts = [];
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchCars.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.adverts = [...state.adverts, ...action.payload];
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { addToFavorites, removeFromFavorites, resetAdverts } =
  advertsSlice.actions;

export const advertsReduser = advertsSlice.reducer;
