import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://650aa93fdfd73d1fab08a97a.mockapi.io";

export const fetchCars = createAsyncThunk(
  "auth/fetchcars",
  async (page = 1, thunkAPI) => {
    const itemsPerPage = 12;
    try {
      const response = await axios.get(
        `/adverts?page=${page}&limit=${itemsPerPage}`
      );

      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchAllCars = createAsyncThunk(
//   "auth/fetchcars",
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get(`/adverts`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const fetchCarsFilter = createAsyncThunk(
  "auth/fetchCarsFilter",
  async (search = "", thunkAPI) => {
    // const itemsPerPage = 12;
    console.log(search);
    try {
      const response = await axios.get(`/adverts?search=${search}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
