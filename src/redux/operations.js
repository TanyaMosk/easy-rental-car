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
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
