import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const handleFetchCars = (state, action) => {
  state.adverts = [...state.adverts, ...action.payload];
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState: {
    adverts: [],
  },
  extraReducers: (builder) =>
    builder.addCase(fetchCars.fulfilled, handleFetchCars),
});

export const advertsReduser = advertsSlice.reducer;
