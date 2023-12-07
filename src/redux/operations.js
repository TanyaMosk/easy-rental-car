import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://650aa93fdfd73d1fab08a97a.mockapi.io";

// export const fetchCars = async () => {
//   const response = await axios.get("/adverts");
//   console.log(response);
//   return response.data;
// };

export const fetchCars = createAsyncThunk(
  "auth/fetchcars",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/adverts");
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
