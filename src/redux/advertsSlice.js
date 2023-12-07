import { createSlice } from "@reduxjs/toolkit";
import { buildQueries } from "@testing-library/react";
import { fetchCars } from "./operations";

const handleFetchCars = (state, action) => {
  state.adverts = action.payload;
};

const initState = [
  {
    year: 0,
    make: "",
    model: "",
    type: "",
    img: "",
    description: "",
    fuelConsumption: "",
    engineSize: "",
    accessories: [],
    functionalities: [],
    rentalPrice: "",
    rentalCompany: "",
    address: "",
    rentalConditions: "",
    mileage: 0,
  },
];

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
