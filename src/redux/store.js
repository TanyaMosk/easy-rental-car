import { configureStore } from "@reduxjs/toolkit";
import { advertsReduser } from "./advertsSlice";

export const store = configureStore({
  reducer: {
    adverts: advertsReduser,
  },
});
