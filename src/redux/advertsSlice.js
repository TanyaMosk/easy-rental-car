import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, fetchCarsFilter } from "./operations";

const advertsSlice = createSlice({
  name: "adverts",
  initialState: {
    adverts: [],
    isLoading: false,
    error: null,
    favorites: [],
    filter: "",
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCars.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.filter = "";
        state.adverts = [...state.adverts, ...action.payload];
        state.isLoading = false;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCarsFilter.fulfilled, (state, action) => {
        state.adverts = [...state.adverts, ...action.payload];
        state.isLoading = false;
      }),
  reducers: {
    addToFavorites(state, action) {
      state.favorites = [...state.favorites, action.payload];
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
    addFilter(state, action) {
      state.adverts = [];
      state.filter = action.payload;
    },
  },
});

export const { addToFavorites, removeFromFavorites, resetAdverts, addFilter } =
  advertsSlice.actions;

export const advertsReduser = advertsSlice.reducer;
