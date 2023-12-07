import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const handleFetchCars = (state, action) => {
  state.adverts = action.payload;
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState: {
    adverts: [],
  },
  extraReducers: (builder) =>
    builder.addCase(fetchCars.fulfilled, handleFetchCars),
  //   reducers: {
  //     fetchCars: (state, action) => {
  //       return {
  //         ...state,
  //         adverts: [action.payload],
  //       };
  //     },
  //   },
});

export const advertsReduser = advertsSlice.reducer;
