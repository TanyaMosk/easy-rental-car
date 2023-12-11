import { configureStore } from "@reduxjs/toolkit";
import { advertsReduser } from "./advertsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const advertsPersistConfig = {
  key: "adverts",
  storage,
  whitelist: ["favorites"],
};

export const store = configureStore({
  reducer: {
    adverts: persistReducer(advertsPersistConfig, advertsReduser),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
